



set_form_change_listener('#catalog-contact-form', 'catalog');
set_cart_form_change_listener('#likedProductsForm');


function set_cart_form_change_listener(selector) {
  var form = $(selector)
  
  var uuid_field = form.find('[name=formUUID]');
  if(uuid_field.val() == '' || uuid_field.val() == undefined) {
      var uid = localStorage.getItem(selector + '_form_uuid');
      if (uid == undefined || uid == null) {
          localStorage.setItem(selector + '_form_uuid', uuidv4());
          uid = localStorage.getItem(selector + '_form_uuid');
      }
      uuid_field.val(uid);
  }
  
  fields = form.find('input')
  for(var i = 0; i < fields.length;i++) {
      var field = $(fields[i])
      value = myStorage.getItem(selector + '_input_'+field.attr('id'));
      if(value != undefined && value != null && value!= '') {
          field.val(value)
      }
  }
  fields.change(function() {
      console.log('input change', $(this).val());
      myStorage.setItem(selector + '_input_'+ $(this).attr('id'), $(this).val());
  });
  
  form.change(function() {
  debugger;
      data = $(selector).serialize();
      //data = JSON.stringify(data);
      //console.log('FORM CHANGED', url_field.val(), data);
      update_cart_to_server(data);
      
  });
  form.submit(function(e) {
      e.preventDefault();
      data = $(selector).serialize();
      
      // change submited to be true
      for(var i = 0; i < data.length;i++) {
          if(data[i]["name"] == "sumbited") {
              data[i]["value"] = 'True'
          }
      }
      data = JSON.stringify(data);
      console.log('FORM submited', url_field.val(), data);
      update_cart_to_server(data);
      
      
      // reset form after submit
      form.trigger('reset');
      
      fields = form.find('input')
      for(var i = 0; i < fields.length;i++) {
          var field = $(fields[i])
          value = myStorage.getItem(selector + '_input_'+field.attr('id'));
          if(value != undefined && value != null && value!= '') {
              //field.val('')
              myStorage.setItem(selector + '_input_'+field.attr('id'), '');
          }
      }
      
      localStorage.setItem(selector + '_form_uuid', uuidv4());
      uuid_field.val(localStorage.getItem(selector + '_form_uuid'));
  });
}

function update_cart_to_server(data){

  $.ajax({
      type: "POST",
      url: '/cart-change',
      data: {
          'content':data,
          'csrfmiddlewaretoken': getCookie('csrftoken'),
      },
      success: function() {
          console.log('form-change success');
      },
      fail: function() {
          console.log('form-change fail');
      },
      error: function() {
          console.log('form-change fail');
      },
      dataType: 'json',
  });
}







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
var check_list_inputs = document.querySelectorAll('.section-2 .check-list ul li input');
function handleSection2Checkmarks(pos) {
    var precent = 0;
    if(pos == 0) {
        precent = 0;
    }
    if(pos>50) {
        precent = 10;
        check_list_inputs[0].checked = false;
        check_list_inputs[1].checked = false;
        check_list_inputs[2].checked = false;
        check_list_inputs[3].checked = false;
        check_list_inputs[4].checked = false;
      //document.querySelector('.section-2 .check-list ul li:nth-of-type(1) input').checked = true;
    }
    if(pos>=100 && pos < 200) {
        precent = 20;
        check_list_inputs[0].checked = true;
        check_list_inputs[1].checked = false;
        check_list_inputs[2].checked = false;
        check_list_inputs[3].checked = false;
        check_list_inputs[4].checked = false;
      //document.querySelector('.section-2 .check-list ul li:nth-of-type(1) input').checked = true;
    }
    else if (pos >= 200 && pos < 300){
        precent = 40;
        check_list_inputs[0].checked = true;
        check_list_inputs[1].checked = true;
        check_list_inputs[2].checked = false;
        check_list_inputs[3].checked = false;
        check_list_inputs[4].checked = false;
      //document.querySelector('.section-2 .check-list ul li input').checked = false;
    }
    else if (pos >= 300 && pos < 400){
        precent = 60;
        check_list_inputs[0].checked = true;
        check_list_inputs[1].checked = true;
        check_list_inputs[2].checked = true;
        check_list_inputs[3].checked = false;
        check_list_inputs[4].checked = false;
      //document.querySelector('.section-2 .check-list ul li input').checked = false;
    }
    else if (pos >= 400 && pos < 500){
        precent = 80;
        check_list_inputs[0].checked = true;
        check_list_inputs[1].checked = true;
        check_list_inputs[2].checked = true;
        check_list_inputs[3].checked = true;
        check_list_inputs[4].checked = false;
      //document.querySelector('.section-2 .check-list ul li input').checked = false;
    }
    else if (pos >= 500){
        precent = 100; 
        check_list_inputs[0].checked = true;
        check_list_inputs[1].checked = true;
        check_list_inputs[2].checked = true;
        check_list_inputs[3].checked = true;
        check_list_inputs[4].checked = true;
      //document.querySelector('.section-2 .check-list ul li input').checked = false;
    }
    $('.progress-bar').css('width', precent+'%');
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

function updateClientLikedUI() {
  console.log('hey');
  liked_products = $('#likedProductsForm input[name="products[]"]');
  for (var i = 0; i < liked_products.length; i++) {
    updateClientLikedUI1(liked_products.val());
  }

}

function updateClientLikedUI1(prodId) {
  //TODO: category-item checked is not working becose the category modal is dynamicly generated

  // update button UI in the catalog page
  $(`.my-slick-slide[data-prod-id=${prodId}]`).addClass('checked');
  $(`.category-item[data-category-prod-id="${prodId}"]`).addClass('checked');
  $(`.my-slick-slide[data-prod-id=${prodId}] + .like-btn span`).text('נוסף להצעת מחיר');
  $(`.category-item[data-category-prod-id=${prodId}] .like-btn .like-wrapper a span`).text('נוסף להצעת מחיר');
  
  // update button UI in the product's modal
  $('#modal-add-btn').prop('disabled', true);
  $('#modal-add-btn span').text('נוסף להצעת מחיר');
  $('#modal-add-btn').addClass('isAdded');
}

function removeClientLikedUI1(prodId) {
  $(`.my-slick-slide[data-prod-id=${prodId}]`).removeClass('checked');
  $(`.category-item[data-category-prod-id="${prodId}"]`).removeClass('checked');
  $(`.my-slick-slide[data-prod-id=${prodId}] + .like-btn span`).text('הוסף להצעת מחיר');
  $(`.category-item[data-category-prod-id=${prodId}] .like-btn .like-wrapper a span`).text('הוסף להצעת מחיר');
}

// delete the product from the user form
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

function addClientLikeProduct(prodId) {
  /** 
  $('#likedProductsForm').append(`<input type="text" name="products[]" value="${prodId}"id="">`);
  $('#likedProductsForm').trigger('change');
  */
  
  /*
  */
  $('#likedProductsForm').append(`<input type="text" name="products[]" value="${prodId}" id="">`);
  $('#likedProductsForm').trigger('change');
  updateClientLikedUI1(prodId);


  // bell animation:
  $('#navbarDropdown').removeClass('notify');
  $('#navbarDropdown').offsetWidth = $('#navbarDropdown').offsetWidth;
  setTimeout(() => {
    $('#navbarDropdown').addClass('notify');
  }, 200);
  //setTimeout(updateProductsCart, 500);
  //setTimeout(getUserTasks, 500);
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
function deleteLikedProductBtn(prodId) {
  console.log('delete me');
  $(`li[data-prod-id="${prodId}"`).remove();
  removeClientLikeProduct(prodId);
}

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
              <a name="like-btn"><span name="like-btn">הוסף להצעת מחיר</span></a>
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
  for(var i = 0; i < albums.length; i++) {
    currAlbum = albums[i];
    if(albumIndex == i) {
      buttonsMarkup += `<button class="btn btn-success" onclick="openCategoryModal(${currAlbum.id})" value=${currAlbum.id}>${currAlbum.title}</button>`
    }
    else {
      buttonsMarkup += `<button class="btn btn-primary" onclick="openCategoryModal(${currAlbum.id})" value=${currAlbum.id}>${currAlbum.title}</button>`
    }
  }

  $('#categoryModal .modal-title').text(album.title);
  $('#categoryModal .modal-body').html(bodyMarkup);
  $('#categoryModal .modal-footer').html(buttonsMarkup);
  $('#categoryModal').modal('show');
  $('#categoryModal .close-modal').click(function () {
    $('#categoryModal').modal('hide');
  });
}

//setCatalogTaskListiner();
//getUserTasks();