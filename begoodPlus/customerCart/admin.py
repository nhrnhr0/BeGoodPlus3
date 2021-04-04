from django.contrib import admin

# Register your models here.
from .models import CustomerCart
class CustomerCartAdmin(admin.ModelAdmin):
    list_display = ('formUUID', 'url', 'created_date', 'name', 'email', 'phone', 'message', 'sumbited')
    filter_horizontal = ('products',)
admin.site.register(CustomerCart, CustomerCartAdmin)