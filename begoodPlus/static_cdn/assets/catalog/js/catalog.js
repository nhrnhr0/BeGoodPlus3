function set_like_btn(selector, val) {
  btns = $(selector);
  btns.html(get_like_markup(val));
}

function get_like_markup(val) {
  if (val == false) {
    return (`<img src="static/assets/catalog/imgs/icons8-plus-48.png"> הוסף`);
  } else {
    return (`<img src="static/assets/catalog/imgs/icons8-check-mark-48.png"> הוסף`);
  }
}

/*============ cart and form functionality start =====================*/
/*function get_last_cart() {
  var forms = myStorage.getItem('last_cart');
  if (forms == undefined)
    forms = '[]';
  return JSON.parse(forms);
}

function set_last_cart(data) {
  myStorage.setItem('last_cart', JSON.stringify(data));
}*/

function deparam(query) {
  var pairs, i, keyValuePair, key, value, map = {};
  // remove leading question mark if its there
  if (query.slice(0, 1) === '?') {
    query = query.slice(1);
  }
  if (query !== '') {
    pairs = query.split('&');
    for (i = 0; i < pairs.length; i += 1) {
      keyValuePair = pairs[i].split('=');
      key = decodeURIComponent(keyValuePair[0]);
      value = (keyValuePair.length > 1) ? decodeURIComponent(keyValuePair[1]) : undefined;
      if (Array.isArray(map[key])) {
        map[key].push(value);
      } else if (map[key] != undefined) {
        map[key] = [map[key], value];
      } else {
        map[key] = value;
      }
    }
  }
  return map;
}
/*
function cart_form_changed(data) {

  var jsdata = deparam(data);
  console.log(jsdata);
  var formUUID = jsdata.formUUID
  var last_updated_form = get_last_cart()[formUUID];
  if (last_updated_form == undefined) {
    last_updated_form = {}
  }
  if (last_updated_form?.value != data) {
    last_updated_form['id'] = formUUID;
    last_updated_form['value'] = data;
    last_updated_form['changed'] = true;
    var new_forms = get_last_cart().filter(function (val, index, arr) {
      return val.id != formUUID;
    });
    new_forms.push(last_updated_form);
    set_last_cart(new_forms);
  }
}
*/
/*
function cart_form_interval() {
  forms = get_last_cart();
  for (var i = 0; i < forms.length; i++) {
    form = forms[i];
    if (form['changed'] == true) {
      update_cart_to_server(form.value);
      form['changed'] = false;
      forms = forms.splice(i, 1);
      set_last_cart(forms);
    }
  }
}
*/

/*
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
    cart_form_changed(data);
    //update_cart_to_server(data);

  });
  form.submit(function (e) {
    e.preventDefault();
    data = $(selector).serialize();
    data += '&sumbited=True'

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
*/

/*
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
}*/

function remove_productUI(prodId) {

  // delete for the client UI:

  // cart modal
  //$(`#likedProductsForm :input[value=${prodId}]`).remove();
  $(`.my-slick-slide[data-prod-id=${prodId}]`).removeClass('checked');
  $(`.category-item[data-category-prod-id="${prodId}"]`).removeClass('checked');
  $(`.my-slick-slide[data-prod-id=${prodId}] + .like-btn span`).text('הוסף');
  $(`.category-item[data-category-prod-id=${prodId}] .like-btn .like-wrapper a span`).text('הוסף');

  // send to server
  //$(`#likedProductsForm #cartProductsList ul li[data-prod-id='${prodId}']`).remove();
  //$(`#likedProductsForm`).trigger('change')
}

function remove_product(prodId) {
  ajax_product_del(prodId);
  remove_productUI(prodId);
}

function update_cart_modal(cart) {
  var cart_markup = `<ul>`;
  for (var i = 0; i < cart.products.length; i++) {
    cart_markup +=
      `<li data-prod-id="${cart.products[i].id}">
        <img src="${cart.products[i].image}"/>
        ${cart.products[i].id} -> ${cart.products[i].title}
        <button type="button" onclick="remove_product(${cart.products[i].id})">X</button>
      </li>`
  }
  cart_markup += `</ul>`

  $('#cartProductsList').html(cart_markup)
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
  update_cart_modal(cart);
  for (var i = 0; i < products.length; i++) {
    updateClientLikedUI1(products[i].id)

    /*var form_elm = $(`#likedProductsForm :input[value="${products[i].id}"]`);
    if (form_elm.length == 0) {

      $('#likedProductsForm').append(`<input type="text" name="products[]" value="${products[i].id}" id="">`);
    }*/
  }
}

/*============ cart and form functionality end =====================*/


var _modal_z_index_incrementor = 0;
// fix category modal overlaping product modal
$(document).on('show.bs.modal', '.modal', function (event) {
  var zIndex = _modal_z_index_incrementor++ + 1040 + (10 * $('.modal:visible').length);
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

var last_updated_cart = undefined;

function render_cart_view(data) {
  if (last_updated_cart != undefined) {
    var last_updated_time = last_updated_cart['timestemp']
    last_updated_time = Date.parse(last_updated_time);
    var curr_updated_time = Date.parse(data['timestemp']);
    if (curr_updated_time >= last_updated_time) {
      last_updated_cart = data;
    } else {
      console.error('packets get in wierd order');
    }
  } else {
    last_updated_cart = data;
  }

  update_cart_ui(last_updated_cart);

}

var _ajax_product_count = 0;

function ajax_product_del(prodId) {
  _ajax_product_count += 1;
  $('body').addClass('waiting');
  $.ajax({
    type: "POST",
    url: '/cart/del',
    data: {
      'content': prodId,
      'csrfmiddlewaretoken': getCookie('csrftoken'),
    },
    success: function (data) {
      _ajax_product_count -= 1;
      if (_ajax_product_count == 0) {
        $('body').removeClass('waiting');
      }
      //updateClientLikedUI1(prodId);
      console.log(data);
      render_cart_view(data);
      /*console.log('form-change success');
      console.log(cart);
      myStorage.setItem('cart', JSON.stringify(cart));
      update_cart_ui(cart);*/
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

function ajax_refresh_cart() {

  $.ajax({
    type: "POST",
    url: '/cart/view',
    data: {
      'csrfmiddlewaretoken': getCookie('csrftoken'),
    },
    success: function (data) {
      render_cart_view(data);
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

function ajax_product_add(prodId) {
  _ajax_product_count += 1;
  $('body').addClass('waiting');
  $.ajax({
    type: "POST",
    url: '/cart/add',
    data: {
      'content': prodId,
      'csrfmiddlewaretoken': getCookie('csrftoken'),
    },
    success: function (data) {
      _ajax_product_count -= 1;
      if (_ajax_product_count == 0) {
        $('body').removeClass('waiting');
      }
      //updateClientLikedUI1(prodId);
      console.log(data);
      render_cart_view(data);
      /*console.log('form-change success');
      console.log(cart);
      myStorage.setItem('cart', JSON.stringify(cart));
      update_cart_ui(cart);*/
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


function ajax_cart_contact_info(data) {
  $.ajax({
    type: "POST",
    url: '/cart/info',
    data: {
      'content': data,
      'csrfmiddlewaretoken': getCookie('csrftoken'),
    },
    success: function (data) {
      console.log(data);
      render_cart_view(data);
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

function addClientLikeProduct(prodId) {
  ajax_product_add(prodId);
  /*
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
  */
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

/*
function loadProductsModal() {
  $('#likedProductsModal').modal('show');
  $('#likedProductsModal .close-modal').click(function () {
    $('#likedProductsModal').modal('hide');
  });
  //updateProductsCart();
}*/

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
          <img class="product-image" width="250px" height="250px" onclick="$('.my-slick-slide[data-prod-id=${img.id}]').click();" src="${img.image_thumbnail}" alt="${img.description}" />
          <div class="img-title">${img.title}</div>
        </div>
        <div>
          <div onclick="categoryLikeBtnClicked(${img.id})" class="like-btn" name="like-btn">
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

  update_cart_ui(last_updated_cart);
}

function categoryLikeBtnClicked(prodId) {
  addClientLikeProduct(prodId);
  flyToCart($(`#categoryModal .modal-body`).find(`div[data-category-prod-id='${prodId}'] .product-image`));
  
}

var _last_cart_contact_info = undefined;
var _need_to_update_cart_contact_info = false;

function check_for_contact_info_change(ser_form, isImportant = false) {
  if (isImportant) {
    cart_info_update(ser_form);
    _last_cart_contact_info = ser_form;
    return;
  }

  if (ser_form != _last_cart_contact_info) {
    _need_to_update_cart_contact_info = true;
    _last_cart_contact_info = ser_form;
  }

}

// actual sending request to the server
function cart_info_update(info) {
  ajax_cart_contact_info(info);
}
// used with setInserval and send the periotecly if there is changes to not overload the server
function cart_info_updater() {
  if (_need_to_update_cart_contact_info) {
    cart_info_update(_last_cart_contact_info);
    _need_to_update_cart_contact_info = false;
  }
}

function set_cart_contact_change_listener(selector) {
  //last_updated_cart
  var form = $(selector);
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
    ser_form = $(form).serialize();
    ser_form += "&submited=false";
    check_for_contact_info_change(ser_form);
  });

  form.submit(function (e) {
    e.preventDefault();
    ser_form = $(form).serialize();
    ser_form += "&submited=true";
    check_for_contact_info_change(ser_form, true);
    //data = $(selector).serialize();
    //data += '&sumbited=True'
  });

}


function flyToCart(img) {
  var eltoDrag = img;
  target = $('.cart');
  shake =true;
  var imgclone = eltoDrag.clone()
      .offset({
          top: eltoDrag.offset().top,
          left: eltoDrag.offset().left
      })
      .css({
          'opacity': '0.5',
          'position': 'absolute',
          'height': eltoDrag.height() / 2,
          'width': eltoDrag.width() / 2,
          'z-index': '999999'
      })
      .appendTo($('body'))
      .animate({
          'top': target.offset().top + 10,
          'left': target.offset().left + 15,
          'height': eltoDrag.height() / 2,
          'width': eltoDrag.width() / 2
      }, 1000, 'easeInOutExpo');

  if (shake) {
      setTimeout(function () {
          target.effect("shake", {
              times: 2
          }, 200);
      }, 1500);
  }


  imgclone.animate({
      'width': 0,
      'height': 0
  }, function () {
      $(this).detach()
  });
}

/*
function update_category_cart_ui() {
  var cart = JSON.parse(myStorage.getItem('cart'));
  update_cart_ui(cart);
}*/

//setCatalogTaskListiner();
//getUserTasks();
set_form_change_listener('#catalog-contact-form', 'catalog');
ajax_refresh_cart();
set_cart_contact_change_listener('#likedProductsForm');
setInterval(cart_info_updater, 3000);
//set_cart_form_change_listener('#likedProductsForm');
//update_cart_ui(JSON.parse(myStorage.getItem('cart')));
//setInterval(cart_form_interval, 3000);