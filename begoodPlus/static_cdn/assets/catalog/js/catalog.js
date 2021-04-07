function set_like_btn(selector, val) {
  btns = $(selector);
  btns.html(get_like_markup(val));
}
function get_like_markup(val) {
  if(val == false) {
    return (`<img src="static/assets/catalog/imgs/icons8-plus-48.png"> הוסף`);
  }else {
    return (`<img src="static/assets/catalog/imgs/icons8-check-mark-48.png"> הוסף`);
  }
}

/*============ cart and form functionality start =====================*/


function set_cart_form_change_listener(selector) {
  var form = $(selector)

  var uuid_field = form.find('[name=formUUID]');
  if (uuid_field.val() == '' || uuid_field.val() == undefined) {
    var uid = localStorage.getItem(selector + '_form_uuid');
    if (uid == undefined || uid == null) {
      localStorage.setItem(selector + '_form_uuid', uuidv4());
      uid = localStorage.getItem(selector + '_form_uuid');
    }
    uuid_field.val(uid);
  }

  fields = form.find('input')
  for (var i = 0; i < fields.length; i++) {
    var field = $(fields[i])
    value = myStorage.getItem(selector + '_input_' + field.attr('id'));
    if (value != undefined && value != null && value != '') {
      field.val(value)
    }
  }
  fields.change(function () {
    console.log('input change', $(this).val());
    myStorage.setItem(selector + '_input_' + $(this).attr('id'), $(this).val());
  });

  form.change(function () {
    data = $(selector).serialize();
    //data = JSON.stringify(data);
    //console.log('FORM CHANGED', url_field.val(), data);
    update_cart_to_server(data);

  });
  form.submit(function (e) {
    e.preventDefault();
    data = $(selector).serialize();
    data += '&sumbited=True'

    // change submited to be true
    /*for(var i = 0; i < data.length;i++) {
        if(data[i]["name"] == "sumbited") {
            data[i]["value"] = 'True'
        }
    }*/
    //data = JSON.stringify(data);
    update_cart_to_server(data);


    // reset form after submit
    form.find('[name="products[]"]').remove();
    form.trigger('reset');

    fields = form.find('input')
    for (var i = 0; i < fields.length; i++) {
      var field = $(fields[i])
      value = myStorage.getItem(selector + '_input_' + field.attr('id'));
      if (value != undefined && value != null && value != '') {
        //field.val('')
        myStorage.setItem(selector + '_input_' + field.attr('id'), '');
      }
    }

    localStorage.setItem(selector + '_form_uuid', uuidv4());
    uuid_field.val(localStorage.getItem(selector + '_form_uuid'));
  });
}

function update_cart_to_server(data) {

  $.ajax({
    type: "POST",
    url: '/cart-change',
    data: {
      'content': data,
      'csrfmiddlewaretoken': getCookie('csrftoken'),
    },
    success: function (cart) {
      console.log('form-change success');
      console.log(cart);
      myStorage.setItem('cart', JSON.stringify(cart));
      update_cart_ui(cart);
    },
    fail: function () {
      console.log('form-change fail');
    },
    error: function () {
      console.log('form-change fail');
    },
    dataType: 'json',
  });
}

function update_cart_ui(cart) {

  if (cart == undefined) {
    //TODO: think about clearing old data
    return;
  }
  if (cart.status == "submited") {
    $('#cartProductsList').empty();
    removeClientLikedUIAll();

  }
  var products = cart.products;
  for (var i = 0; i < products.length; i++) {
    updateClientLikedUI1(products[i].id)

    var form_elm = $(`#likedProductsForm :input[value="${products[i].id}"]`);
    if (form_elm.length == 0) {

      $('#likedProductsForm').append(`<input type="text" name="products[]" value="${products[i].id}" id="">`);
    }
  }
}

/*============ cart and form functionality end =====================*/



// fix category modal overlaping product modal
$(document).on('show.bs.modal', '.modal', function (event) {
  var zIndex = 1040 + (10 * $('.modal:visible').length);
  $(this).css('z-index', zIndex);
  setTimeout(function () {
    $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
  }, 0);
});
$(document).on('hidden.bs.modal', '.modal', function () {
  $('.modal:visible').length && $(document.body).addClass('modal-open');
});

// handle section 2 check-list and proggres bar amimation
var check_list_inputs = document.querySelectorAll('.section-3 .check-list ul li input');

function handleSection2Checkmarks(pos) {
  var pos_offset = 4800;
  var precent = 0;
  if (pos == 0) {
    precent = 0;
  }
  if (pos > 50 + pos_offset) {
    precent = 10;
    check_list_inputs[0].checked = false;
    check_list_inputs[1].checked = false;
    check_list_inputs[2].checked = false;
    check_list_inputs[3].checked = false;
    check_list_inputs[4].checked = false;
    //document.querySelector('.section-2 .check-list ul li:nth-of-type(1) input').checked = true;
  }
  if (pos >= 100 + pos_offset && pos < 200 + pos_offset) {
    precent = 20;
    check_list_inputs[0].checked = true;
    check_list_inputs[1].checked = false;
    check_list_inputs[2].checked = false;
    check_list_inputs[3].checked = false;
    check_list_inputs[4].checked = false;
    //document.querySelector('.section-2 .check-list ul li:nth-of-type(1) input').checked = true;
  } else if (pos >= 200 + pos_offset && pos < 300 + pos_offset) {
    precent = 40;
    check_list_inputs[0].checked = true;
    check_list_inputs[1].checked = true;
    check_list_inputs[2].checked = false;
    check_list_inputs[3].checked = false;
    check_list_inputs[4].checked = false;
    //document.querySelector('.section-2 .check-list ul li input').checked = false;
  } else if (pos >= 300 + pos_offset && pos < 400 + pos_offset) {
    precent = 60;
    check_list_inputs[0].checked = true;
    check_list_inputs[1].checked = true;
    check_list_inputs[2].checked = true;
    check_list_inputs[3].checked = false;
    check_list_inputs[4].checked = false;
    //document.querySelector('.section-2 .check-list ul li input').checked = false;
  } else if (pos >= 400 + pos_offset && pos < 500 + pos_offset) {
    precent = 80;
    check_list_inputs[0].checked = true;
    check_list_inputs[1].checked = true;
    check_list_inputs[2].checked = true;
    check_list_inputs[3].checked = true;
    check_list_inputs[4].checked = false;
    //document.querySelector('.section-2 .check-list ul li input').checked = false;
  } else if (pos >= 500 + pos_offset) {
    precent = 100;
    check_list_inputs[0].checked = true;
    check_list_inputs[1].checked = true;
    check_list_inputs[2].checked = true;
    check_list_inputs[3].checked = true;
    check_list_inputs[4].checked = true;
    //document.querySelector('.section-2 .check-list ul li input').checked = false;
  }
  //$('.progress-bar').css('width', precent + '%');
}

/*
function setCatalogTaskListiner() {
  var frm = $('.contact-form');
  frm.change(function () {
    console.log('update Catalog Task');
    updateCatalogTask();
  });

  var productsFrm = $('#likedProductsForm');
  productsFrm.change(function () {
    console.log('update Products Task');
    updateLikedProductsTask();
  });

  setFormAutoSave(productsFrm)
}

function updateCatalogTask(isSubmited = false) {
  var frm = $('.contact-form');
  task_id = myStorage.getItem('task_catalog_id');
  var serTaskId = '';
  if (task_id) {
    var serTaskId = `&task_id=${task_id}&submited=${isSubmited}`
  }
  serFrm = frm.serialize() + serTaskId;

  if (isSubmited) {
    isValid = frm.get(0).reportValidity();
    if (isValid == false) {
      alert('שם ופאלפון הם שדות חובה');
      return;
    }
  }

  $.ajax({
    type: "POST",
    url: '/tasks/update-contact-form',
    data: serFrm,
    success: (json) => {
      console.log(json);
      myStorage.setItem('task_catalog_id', json.task_id);
      if (json.task_id == -1) {
        frm.trigger("reset");
        resetContactFormAutoSave();
      }
      getUserTasks();
      updateProductsCart();
    },
    dataType: "json"
  });
}

function submitCatalogContactForm() {
  updateCatalogTask(isSubmited = true);
}

function submitCatalogProducts() {
  updateLikedProductsTask(isSubmited = true);
  window.location.href = window.location.href;

}
// TODO: send the ajax once and not once per input field
function updateLikedProductsTask(isSubmited = false) {
  var frm = $('#likedProductsForm');
  task_id = myStorage.getItem('task_products_id');
  var serTaskId = '';
  if (task_id) {
    //var serTaskId = '&task_id=' + task_id
    var serTaskId = `&task_id=${task_id}&submited=${isSubmited}`;
  }
  serFrm = frm.serialize() + serTaskId;
  if (isSubmited) {
    isValid = frm.get(0).reportValidity();
    if (isValid == false) {
      alert('שם פאלפון ואימייל הם שדות חובה');
      return;
    }
  }
  $.ajax({
    type: "POST",
    url: '/tasks/update-products-form',
    data: serFrm,
    success: (json) => {
      console.log(json);
      //myStorage.setItem('task_products_name',json.task_name );
      myStorage.setItem('task_products_id', json.task_id);
      if (json.task_id == -1) {
        frm.trigger("reset");
        resetFormAutoSave(frm);
        $('#cartProductsList').empty();
        getUserTasks();
      }
    },
    dataType: "json"
  });
}


function modal_add_btn_click() {

}

*/

/*
function updateClientLikedUI() {
  console.log('hey');
  liked_products = $('#likedProductsForm input[name="products[]"]');
  for (var i = 0; i < liked_products.length; i++) {
    updateClientLikedUI1(liked_products.val());
  }

}*/

function updateClientLikedUI1(prodId) {
  //TODO: category-item checked is not working becose the category modal is dynamicly generated

  // update button UI in the catalog page
  $(`.my-slick-slide[data-prod-id=${prodId}]`).addClass('checked');
  $(`.category-item[data-category-prod-id="${prodId}"]`).addClass('checked');
  set_like_btn(`.my-slick-slide[data-prod-id=${prodId}] + .like-btn span`, true);
  set_like_btn(`.category-item[data-category-prod-id=${prodId}] .like-btn .like-wrapper a span`, true);
  /*
  $(`.my-slick-slide[data-prod-id=${prodId}] + .like-btn span`).html(`
    <img src="{%static 'assets/catalog/imgs/icons8-check-mark-48.png'%}"> הוסף
  הוסף להצעת מחיר
  `);
  $(`.category-item[data-category-prod-id=${prodId}] .like-btn .like-wrapper a span`).html(`
  <img src="{%static 'assets/catalog/imgs/icons8-check-mark-48.png'%}"> הוסף
הוסף להצעת מחיר
`);*/

  // update button UI in the product's modal
  $('#modal-add-btn').prop('disabled', true);
  set_like_btn('#modal-add-btn span', true);
  $('#modal-add-btn').addClass('isAdded');
}

function removeClientLikedUI1(prodId) {
  $(`.my-slick-slide[data-prod-id=${prodId}]`).removeClass('checked');
  $(`.category-item[data-category-prod-id="${prodId}"]`).removeClass('checked');
  set_like_btn(`.my-slick-slide[data-prod-id=${prodId}] + .like-btn span`, false);
  set_like_btn(`.category-item[data-category-prod-id=${prodId}] .like-btn .like-wrapper a span`, false);
  /*
  $(`.my-slick-slide[data-prod-id=${prodId}] + .like-btn span`).html(`
  <img src="{%static 'assets/catalog/imgs/icons8-plus-48.png'%}"> הוסף
הוסף להצעת מחיר
`);
  $(`.category-item[data-category-prod-id=${prodId}] .like-btn .like-wrapper a span`).html(`
  <img src="{%static 'assets/catalog/imgs/icons8-plus-48.png'%}"> הוסף
הוסף להצעת מחיר
`);*/
}

function removeClientLikedUIAll() {
  $(`.my-slick-slide`).removeClass('checked');
  $(`.category-item`).removeClass('checked');


  set_like_btn('.my-slick-slide + .like-btn span', false);
  set_like_btn('.category-item .like-btn .like-wrapper a span', false);
  /*
  $(`.my-slick-slide + .like-btn span`).html(`
  <img src="{%static 'assets/catalog/imgs/icons8-plus-48.png'%}"> הוסף
הוסף להצעת מחיר
`); 
  $(`.category-item .like-btn .like-wrapper a span`).html(`
  <img src="{%static 'assets/catalog/imgs/icons8-plus-48.png'%}"> הוסף
הוסף להצעת מחיר
`);*/
}

// delete the product from the user form
/*
function removeClientLikeProduct(prodId) {
  var productsToRemove = $(`#likedProductsForm :input[name="products[]"]`).filter(function () {
    return this.value == prodId
  });
  productsToRemove.remove();
  removeClientLikedUI1(prodId);
  var cartId = myStorage.getItem('task_products_id');
  var serTaskId = '';
  if (cartId) {
    var serTaskId = `&cartId=${cartId}&prodId=${prodId}`
  }
  serFrm = frm.serialize() + serTaskId;

  $.ajax({
    type: "POST",
    url: `tasks/delete-user-liked-product/`,
    data: serFrm,
    success: (json) => {
      console.log('product deleted in the server', json);
    }
  });
  //setTimeout(updateLikedProductsTask, 500);

}
*/

function addClientLikeProduct(prodId) {
  if ($(`#likedProductsForm :input[value="${prodId}"]`).length == 0) {
    $('#likedProductsForm').append(`<input type="text" name="products[]" value="${prodId}" id="">`);
    $('#likedProductsForm').trigger('change');
    updateClientLikedUI1(prodId);


    // bell animation:
    $('#navbarDropdown').removeClass('notify');
    $('#navbarDropdown').offsetWidth = $('#navbarDropdown').offsetWidth;
    setTimeout(() => {
      $('#navbarDropdown').addClass('notify');
    }, 200);
  }
  console.log('addClientLikeProduct done');
}
/*
function updateProductsCart() {
  $.ajax({
    type: "GET",
    url: '/tasks/get-user-cart',
    //data: serFrm,
    success: (json) => {
      console.log(json);
      //myStorage.setItem('task_catalog_id',json.task_id );
      //getUserTasks();
      var productsMarkup = '<ul>';
      for (var i = 0; i < json.products_list.length; i++) {

        product = json.products_list[i];
        productsMarkup += `
          <li data-prod-id="${product.id}">
            <div>
              <img src=${product.image_thumbnail} height="50px"/>
              <span>${product.title}</span>
            </div>
            <div>
              <button type='button' data-prod-id="${product.id}" onclick="deleteLikedProductBtn(${product.id});" ><span >&times;</span></button>
            </div>
          </li>
        `
        updateClientLikedUI1(product.id);
      }
      productsMarkup += '</ul>';
      $('#cartProductsList').html(productsMarkup);
    },
    dataType: "json"
  });
}
*/

// delete the product from the user cart in the html and in the form
/*function deleteLikedProductBtn(prodId) {
  console.log('delete me');
  $(`li[data-prod-id="${prodId}"`).remove();
  removeClientLikeProduct(prodId);
}*/

function loadProductsModal() {
  $('#likedProductsModal').modal('show');
  $('#likedProductsModal .close-modal').click(function () {
    $('#likedProductsModal').modal('hide');
  });
  //updateProductsCart();
}

function openImageProductModal(prodId) {
  var albums = getAllAlbums();
  var product = undefined;
  for (var i = 0; i < albums.length; i++) {
    for (var j = 0; j < albums[i].images_list.length; j++) {
      if (albums[i].images_list[j].id == prodId) {
        product = albums[i].images_list[j];
        break;
      }
    }
    if (product != undefined) {
      break;
    }
  }



  $('#ImageProductsModal .modal-title').text(product.title);
  $('#ImageProductsModal .modal-body').html(`
    <img class="img-fluid" src=${product.image} />
  `);
  //$('#ImageProductsModal .modal-footer').html('');
  $('#ImageProductsModal').modal('show');
  $('#ImageProductsModal .close-modal').click(function () {
    $('#ImageProductsModal').modal('hide');
  });
}


function openCategoryModal(albumId) {
  //updateLikedProductsTask();
  $('#catalogModal .close-modal').click();
  //updateProductsCart();
  var albums = getAllAlbums();
  var albumIndex = albums.findIndex((val, idx, obj) => {
    return val.id == albumId
  });
  var album = albums[albumIndex];
  /*
  var nextAlbum = albums[(albumIndex + 1) % albums.length];
  var prevIndex;
  if (albumIndex == 0) {
    prevIndex = albums.length
  } else {
    prevIndex = albumIndex
  }
  prevIndex -= 1;
  var prevAlbum = albums[prevIndex];
  */
  var categoryDescription = $(`#album_description_${album.id}`);
  var categoryFotter = $(`#album_fotter_${album.id}`);
  var bodyMarkup = `<h4 class="category-description">${marked(categoryDescription.text())}</h4>`

  var imagesMarkup = '<div class="category-items">'
  for (var i = 0; i < album.images_list.length; i++) {
    img = album.images_list[i];
    imagesMarkup += `
      <div class="category-item" data-category-prod-id="${img.id}">
        <div class="category-item-img-wraper">
          <img width="250px" height="250px" onclick="$('.my-slick-slide[data-prod-id=${img.id}]').click();" src="${img.image_thumbnail}" alt="${img.description}" />
          <div class="img-title">${img.title}</div>
        </div>
        <div>
          <div onclick="$('.my-slick-slide[data-prod-id=${img.id}] + .like-btn .like-wrapper')[0].click();" class="like-btn" name="like-btn">
            <div class="like-wrapper">
              <a name="like-btn">
              <span name="like-btn">
                ${get_like_markup(false)}
              </span></a>
            </div>
          </div>
        </div>
      </div>
      `
  }
  imagesMarkup += '</div>'
  bodyMarkup += imagesMarkup;
  bodyMarkup += `<h4 class="category-fotter">${marked(categoryFotter.text())}</h4>`

  /*
    var buttonsMarkup = `
    <button class="btn btn-primary" onclick="openCategoryModal(${prevAlbum.id})" value=${prevAlbum.id}>${prevAlbum.title}</button>
      <button class="btn btn-primary" onclick="openCategoryModal(${nextAlbum.id})" value=${nextAlbum.id}>${nextAlbum.title}</button>  
    `*/
  var buttonsMarkup = ``;
  for (var i = 0; i < albums.length; i++) {
    currAlbum = albums[i];
    if (albumIndex == i) {
      buttonsMarkup += `<button class="btn btn btn-dark" onclick="openCategoryModal(${currAlbum.id})" value=${currAlbum.id}>${currAlbum.title}</button>`
    } else {
      buttonsMarkup += `<button class="btn btn-outline-dark" onclick="openCategoryModal(${currAlbum.id})" value=${currAlbum.id}>${currAlbum.title}</button>`
    }
  }

  $('#categoryModal .modal-title').text(album.title);
  $('#categoryModal .modal-body').html(bodyMarkup);
  //$('#categoryModal .modal-footer').html(buttonsMarkup);
  $('#categoryModal .modal-header .modal-header-links').html(buttonsMarkup);
  $('#categoryModal').modal('show');
  $('#categoryModal .close-modal').click(function () {
    $('#categoryModal').modal('hide');
  });

  update_category_cart_ui();
}

function update_category_cart_ui() {
  var cart = JSON.parse(myStorage.getItem('cart'));
  update_cart_ui(cart);
}

//setCatalogTaskListiner();
//getUserTasks();
set_form_change_listener('#catalog-contact-form', 'catalog');
set_cart_form_change_listener('#likedProductsForm');
update_cart_ui(JSON.parse(myStorage.getItem('cart')));