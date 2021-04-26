
const myStorage = window.sessionStorage;






/* ================= icon bar functionality start ======================== */
var lastKnownScrollPosition = 0;
var ticking = false;
var side_icons = document.querySelectorAll('.icon-bar .icon');
var is_delivery_first_open = false;
function handleSideIcons(scrollPos) {
    //var icons = document.querySelectorAll('.icon-bar > div');
    if (scrollPos > 200) {
        //
        //var icons = document.querySelectorAll('.icon-bar > div');
        for(var i= 0; i  < side_icons.length; i++) {
            //icons[i].style.transform =  'translateX(0px)';
            side_icons[i].classList.remove('hide');
            side_icons[i].classList.add('pick');
            

        }
        if(is_delivery_first_open == false) {
            var delivery = document.querySelector('.icon-bar .icon.delivery');
            delivery.classList.remove('pick');
            delivery.classList.add('show');
            setTimeout(pick_delivery_icon_in_start, 3000, delivery);
            is_delivery_first_open = true;
        }
    }else {
        
        for(var i= 0; i  < side_icons.length; i++) {
            //icons[i].style.transform =  'translateX(-220px)';
            side_icons[i].classList.remove('show');
            side_icons[i].classList.remove('pick');
            side_icons[i].classList.add('hide');
        }
        //document.querySelector('.icon-bar > div').css('transform', 'translateX(-220px)');
    }
}

function pick_delivery_icon_in_start(delivery) {
    delivery.classList.remove('show');
    delivery.classList.add('pick');
    //is_delivery_first_open = false;
}
function collapseMenu() {
    $('#navbarSupportedContent').collapse('hide');
}
document.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;
    console.log(lastKnownScrollPosition);
    if (!ticking) {
        window.requestAnimationFrame(function() {
          handleSideIcons(lastKnownScrollPosition);
          collapseMenu();
          if(typeof handleSection2Checkmarks !== 'undefined' && typeof handleSection2Checkmarks === 'function'){
            handleSection2Checkmarks(lastKnownScrollPosition);
          }
          ticking = false;
        });
    
        ticking = true;
    }
});


for(var i = 0; i < side_icons.length; i++) {
    side_icons[i].addEventListener('click', (event)=> {
        console.log('show');
        if(event.currentTarget.classList.contains('show')) {
            event.currentTarget.classList.remove('show');
        }else {
            event.currentTarget.classList.add('show');
        }
    });
    
}

/* ================= icon bar functionality end ======================== */



function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

//var last_updated_forms = [];
function get_last_updated_forms() {
    var forms = myStorage.getItem('last_updated_forms');
    if(forms == undefined)
    forms = '[]';
    return JSON.parse(forms);
}
function set_last_updated_forms(data) {
    myStorage.setItem('last_updated_forms', JSON.stringify(data));
}
function contact_form_changed(data) {
    var jsdata = JSON.parse(data);
    console.log(jsdata);
    var formUUID = jsdata.find((e)=>{return (e.name=='formUUID')}).value;
    var last_updated_form = get_last_updated_forms()[formUUID];
    if(last_updated_form == undefined) {
        last_updated_form = {}
    }
    if(last_updated_form?.value != data) {
        last_updated_form['id'] = formUUID;
        last_updated_form['value'] = data;
        last_updated_form['changed'] = true;
        var new_forms = get_last_updated_forms().filter(function (val, index, arr) {
            return val.id != formUUID;
        });
        new_forms.push(last_updated_form);
        set_last_updated_forms(new_forms);
    }
    
}

function contact_form_interval() {
    forms = get_last_updated_forms();
    for(var i = 0; i < forms.length; i++) {
        form = forms[i];
        if(form['changed'] == true) {
            update_contact_to_server(form.value);
            form['changed'] = false;
            forms = forms.splice(i, 1);
            set_last_updated_forms(forms);
        }
    }
}



function set_form_change_listener(selector, url) {
    var form = $(selector)
    
    var url_field = form.find('[name=url]');
    url_field.val(url);
    
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
        data = $(selector).serializeArray();
        data = JSON.stringify(data);
        console.log('FORM CHANGED', url_field.val(), data);
        contact_form_changed(data);
        //update_contact_to_server(data);
        
    });
    form.submit(function(e) {
        e.preventDefault();
        data = $(selector).serializeArray();
        
        // change submited to be true
        for(var i = 0; i < data.length;i++) {
            if(data[i]["name"] == "sumbited") {
                data[i]["value"] = 'True'
            }
        }
        data = JSON.stringify(data);
        console.log('FORM submited', url_field.val(), data);
        //update_contact_to_server(data);
        contact_form_changed(data);
        
        
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

function update_contact_to_server(data){
    $.ajax({
        type: "POST",
        url: '/form-change',
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





function openCart() {
    console.log('openCart');
    $('#likedProductsModal').modal('show');
    $('#likedProductsModal .close-modal').click(function () {
        $('#likedProductsModal').modal('hide');
    });
    /*var products_elem = $('#likedProductsModal #cartProductsList');
    products_elem.empty();

    var products_markup = '<ul>';

    var cart = JSON.parse(myStorage.getItem('cart'));
    console.log(cart);
    products = cart.products;
    for(var i = 0; i < products.length; i++) {
        products_markup  += `<li data-prod-id="${products[i].id}"><img src="${products[i].image}"/>${products[i].id} -> ${products[i].title} <button type="button" onclick="remove_product(${products[i].id})">X</button></li>`
    }
    products_markup += '</ul>';
    products_elem.html(products_markup);
    */
}





function openProductModal(prodId, albumId, delay=0) {


    //var isAdded = e.currentTarget.dataset.isAdded;
    console.log('openProductModal',prodId,albumId, delay);
    albums = getAllAlbums();
    var album = undefined;
    var albumArrIdx = -1;
    if(albumId == -1) {
        [album ,albumArrIdx]= getAlbumFormProdId(prodId)
    }
    else {
        album = albums.find((val, idx, obj) => {
            albumArrIdx = idx;
            return val.id == albumId
        });
    }
    var prodArrIdx = -1;
    var img = album.images_list.find((val, idx) => {
        prodArrIdx  = idx;
        return val.id == prodId
    });

    var colorMarkup = ``
    for (var i = 0; i < img.colors_list.length; i++) {
        var col = img.colors_list[i];
        colorMarkup += `<div class="color-box" title="${col.name}" alt="${col.name}" style="background:${col.color};"></div>`;
    }

    var sizeMarkup = ``;
    for (var i = 0; i < img.sizes_list.length; i++) {
        var size = img.sizes_list[i];
        sizeMarkup += `<div class="size-box">${size.size}</div>`;
    }

    //$('#catalogModal .modal-title').text(album.title);
    $('#catalogModal .modal-title').html(`
    <button data-album-id="${album.id}" onclick="openCategoryModal(${album.id})"
        class="title btn btn-outline-dark">${album.title}</button>
        `);
    $('#catalogModal .modal-body').html(`
    <div class="inner-body">

        <div class="product-detail">
            <div class="product-title">${img.title}</div>
            <hr>
            <div class="product-properties">
                <div class="product-color-wraper">
                    <div class="product-color ">${colorMarkup}</div>
                </div>
                <div class="product-size-wraper">
                    <div class="product-size">${sizeMarkup}</div>
                </div>
            </div>
            <hr>
            
            <!-- <div class="product-description">${img.description.replace(/(?:\r\n|\r|\n)/g, '<br>') }</div> -->
            <div class="product-description">${marked(img.description)}</div>
            
        </div>
        <div class="img-wraper" onclick="openImageProductModal(${img.id})"><img id="catalog-image-${img.id}" src="${img.image_thumbnail}"/></div>
    </div>
    <div class="inner-footer">
    </div>
    `);


    var modalNextBtn = $('#modal-next-btn');
    var modalPrevBtn = $('#modal-prev-btn');
    var nextElementStr =
        `[name=slick-slider-${album.id}] .my-slick-slide[data-my-slide-index=${prodArrIdx+1}]`;
    var prevElementStr =
        `[name=slick-slider-${album.id}] .my-slick-slide[data-my-slide-index=${prodArrIdx-1}]`;
    var nextElement = $(nextElementStr);
    var prevElement = $(prevElementStr);
    
    
    var nextProduct = album.images_list[prodArrIdx+1];
    var prevProduct = album.images_list[prodArrIdx-1];
    if(nextProduct) {
        modalNextBtn.attr('onClick',
        `openProductModal(${album.images_list[prodArrIdx+1].id}, ${album.id}, 0)`
        //`$('${nextElementStr}').click();`
        );
        
        modalNextBtn.data('hide-me', 'no');
        modalNextBtn.css('visibility', 'visible');
    }else {
        // no more next, so hide next button
        modalNextBtn.data('hide-me', 'yes');
        modalNextBtn.css('visibility', 'hidden');
    }
    
    if(prevProduct) {
        modalPrevBtn.attr('onClick',
        `openProductModal(${album.images_list[prodArrIdx-1].id}, ${album.id}, 0)`
        //`$('${prevElementStr}').click();`
        
        );
            modalPrevBtn.data('hide-me', 'no');
            modalPrevBtn.css('visibility', 'visible');
    }
    else {
        // no more prev, so hide prev button
        modalPrevBtn.data('hide-me', 'yes');
        modalPrevBtn.css('visibility', 'hidden');
    }
    

    /*$('#modal-prev-btn').click(function (e) {
    
        $(`.my-slick-slide[data-my-slide-index=${prodArrIdx-1}]`)
            .click();
    //        openProductModal(prodId,albumId, z0);
    });*/

    $('#modal-add-btn').val(prodId);
    slider = $(`.my-slick-slide[data-prod-id=${prodId}]`);
    if (slider.hasClass('checked')) {
        $('#modal-add-btn').prop('disabled', true);
        set_like_btn('#modal-add-btn span', true);
        //$('#modal-add-btn span').text('נוסף להצעת מחיר');
        $('#modal-add-btn').addClass('isAdded');
    } else {
        $('#modal-add-btn').prop('disabled', false);
        set_like_btn('#modal-add-btn span', false);
        //$('#modal-add-btn span').text('הוסף להצעת מחיר');
        $('#modal-add-btn').removeClass('isAdded');
    }
    setTimeout(() => {
        $('#catalogModal').modal('show');
        $('#catalogModal .close-modal').click(function () {
            $('#catalogModal').modal('hide');
        });
    }, delay);
}



// get the first album id that has image id = prodId
function getAlbumFormProdId(prodId) {
debugger;
    var albums = getAllAlbums();
    for(var i = 0; i < albums.length; i++) {
        for(var j = 0; j < albums[i].images_list.length;j++) {
            if(albums[i].images_list[j].id == prodId) {
                return [albums[i], i];
            }
        }
    }
}










set_form_change_listener('#contact-form', 'businessOwner');
setInterval(contact_form_interval, 10000);


/*
function set_autosave(selector, autosave_identifier) {
    if (sessionStorage.getItem(autosave_identifier)) {
        selector.value = sessionStorage.getItem(autosave_identifier);
    }
    selector.addEventListener("change", function () {
        autosave_functionality(autosave_identifier, selector);
    });
}

function autosave_functionality(autosave_identifier, selector) {
    sessionStorage.setItem(autosave_identifier, selector.value);
    console.log(autosave_identifier + ' saved: ' + selector.value);
}


function setContactFormAutoSave() {
    setFormAutoSave($('#contact-form'));
}
function setFormAutoSave(formSelector) {
    frm = formSelector;
    var taskName = frm.find('#taskName').val();

    for (var i = 2; i < frm[0].length; i++) {
        set_autosave(frm[0][i], taskName + '_' + frm[0][i].id);
    }
}

function resetFormAutoSave(formSelector) {
    frm = formSelector;
    var taskName = frm.find('#taskName').val();

    for (var i = 2; i < frm[0].length; i++) {
        sessionStorage.setItem(taskName + '_' + frm[0][i].id, '')
    }
}
function resetContactFormAutoSave() {
    resetFormAutoSave($('#contact-form'));
}
*/
/** contact form submit */
/* TODO: this function dose not clean the autosave data... */
/*
function submitForm() {
    console.log('send form');
    var frm = $('#contact-form');
    var formIsFull = true;
    frm[0].reportValidity();
    frm.find('input').each(function () {
        if ($(this).prop('required') && $(this).val() == '') {
            console.log('form is not full');
            formIsFull = false;
        } else {
            console.log('field full');
        }
    });
    if (!formIsFull) {
        return false;
    }
    frm.submit(); // Submit the form
    var taskName = frm.find('#taskName').val();
    for (var i = 2; i < frm[0].length; i++) {
        $(frm[0][i]).val('');
        $(frm[0][i]).change();
        $(frm[0][i]).trigger('change');
        autosave_functionality(taskName + '_' + frm[0][i].id, frm[0][i]);
    }
    
    frm.reset(); // Reset all form data
    return false; // Prevent page refresh
}*/

/* set tasks in navbar: */
/*
function displayTasks() {
    var dropMenu = $('.navbar .dropdown .dropdown-menu');
    var tasks = getClientTasks();
    if (tasks != undefined) {
        var markup = ``;
        var keys = Object.keys(tasks);
        for (var i = 0; i < keys.length; i++) {

            markup += `<li><a class="dropdown-item" onclick="${tasks[keys[i]].onclick}" href="${tasks[keys[i]].url}">${tasks[keys[i]].msg}</a></li>`
        }
        dropMenu.empty();
        dropMenu.html(markup);
    }
}*/

$(function () {
    $(document).ready(function () {

        $('.menu-wraper').focusout(function(){
            collapseMenu();
            
        });

        $('.icon-bar .icon').hover(
            function() {
                $(this).addClass('hover-show');
            },
            function () {
                $(this).removeClass('hover-show');
            }
        )
        
        /*
        if (window.location.hash == '#contact-form') {
            setTimeout(() => {
                window.scrollTo(0, document.body.scrollHeight);
            }, 500);
        }

        getUserTasks();*/
        
    });
});

/*
function startGetUserTasksLoop() {
    setInterval(getUserTasks, 15000);
}
function taskClicked(taskName, taskUrl, msg) {
    if(taskUrl !=  window.location.pathname) {
        myStorage.setItem('user_click_task', `${taskName}`);
        window.location.href= taskUrl;
    }else {
        activateUserTask(taskName)
    }
}

function getUserTasks() {
    $.ajax({
        url: "/tasks/get-user-tasks",
        type: "GET",
        //cache:false,
        dataType: "json",
        success: function (json) {
            data = json;
            var markup = ``;
            for (var i = 0; i < data.length; i++) { 
                if(data[i].task_name == "catalog-ec6bb117-c8fa-4a38-989a-ab0e0805e44e") {
                    markup += `<li><a class="dropdown-item" onclick="taskClicked('${data[i].task_name}', '/testCatalog#contact-form', 'לא סיימתי למלא טופס בדף הקטלוג');">לא סיימתי למלא טופס בדף הקטלוג</li>`
                }else if (data[i].task_name == "main-ec6bb117-c8fa-4a38-989a-ab0e0805e44e") {
                    markup += `<li><a class="dropdown-item" onclick="taskClicked('${data[i].task_name}', '/test/#contact-form', 'לא סיימתי למלא טופס בדף הבית');">לא סיימתי למלא טופס בדף הבית</li>`
                }else if (data[i].task_name == "products-ec6bb117-c8fa-4a38-989a-ab0e0805e44e") {
                    markup += `<li><a class="dropdown-item" onclick="taskClicked('${data[i].task_name}', '/testCatalog', 'לחץ כאן לשליחת טופס מוצרים אהובים');">לחץ כאן לשליחת טופס מוצרים אהובים</li>`
                }
            }
            $('#navbarDropdownList').html(markup);
            var tasksLenght = $('#navbarDropdownList li').length;
            el = document.getElementById('navbarDropdown');
            var count = Number(el.getAttribute('data-count')) || 0;
            
            if(count != tasksLenght) {
                
                el.setAttribute('data-count', tasksLenght);
                el.classList.remove('notify');
                el.offsetWidth = el.offsetWidth;
                el.classList.add('notify');
            }
        },
        error: function (e) {
            console.log('error: ', e);
        }
    });
}


setContactFormAutoSave();
//displayTasks();
startGetUserTasksLoop();
*/