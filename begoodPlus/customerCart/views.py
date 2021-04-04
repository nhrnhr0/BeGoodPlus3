from django.shortcuts import render
from django.http import JsonResponse
#from urlparse import parse_qs
from urllib.parse import parse_qs
from .serializers import CustomerCartSerializer
from .models import CustomerCart
# Create your views here.
import json
from core.models import Customer
def cart_changed(request):
    if request.is_ajax() and request.method == 'POST':
        customer,customer_created  = Customer.objects.get_or_create(device=request.COOKIES['device'])
        data = request.POST['content']
        form_data = parse_qs(data)
        get_if_exist = lambda data, name: form_data[name][0] if name in data else ''
        get_array_if_exist = lambda data, name: form_data[name] if name in data else ''
            
        name = get_if_exist(form_data, 'name')
        phone = get_if_exist(form_data, 'phone')
        email = get_if_exist(form_data, 'email')
        formUUID = get_if_exist(form_data, 'formUUID')
        products = get_array_if_exist(form_data, 'products[]')
        
        
        cart, cart_created = CustomerCart.objects.distinct().get_or_create(formUUID=formUUID)
        cart.name=name
        cart.phone=phone
        cart.email=email
        cart.products.set(products)
        cart.save()


        ser_context={'request': request}
        data = CustomerCartSerializer(cart, context=ser_context)
        return JsonResponse(data.data)

        '''
        form_data_dict = {}
        for field in data:
            form_data_dict[field["name"]] = field["value"]
        
        name = form_data_dict['name']
        email = form_data_dict['email']
        phone = form_data_dict['phone']
        message = form_data_dict['message']
        formUUID = form_data_dict['formUUID']
        url =  form_data_dict['url']
        sumbited = False if form_data_dict['sumbited'] == '' else True
        
        
        
        obj, created = BeseContactInformation.objects.get_or_create(formUUID=formUUID)
        #print('BeseContactInformation ', created, obj)
        obj.name=name
        obj.email=email
        obj.phone=phone
        obj.message=message
        obj.url=url
        obj.sumbited=sumbited
        obj.save()
        customer.contact.add(obj)
        customer.save()
        
        pp = '\ncustomer: {id: ' + str(customer.id) + ', new: ' + str(customer_created) + '}\n'
        pp += '\tinfo: {id:' +  str(obj.id) + ', new: ' + str(created) + ', name: ' + name + ', email: ' + email + ', message: ' + message  + ', url: ' + url + ' }\n'
        print(pp)
        
        '''
        return JsonResponse({'status':'ok'})
    else:
        print('why not post')