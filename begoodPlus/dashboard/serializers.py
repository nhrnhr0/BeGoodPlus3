from django.db import models
from rest_framework import serializers

from stock.models import Stock
from product.models import Product
class  StoreProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name')
    pass
class StoreStockSerializer(serializers.ModelSerializer):
    #product = serializers.StringRelatedField(many=False)
    product = StoreProductSerializer(many=False)
    class Meta:
        model = Stock
        fields = ('id', 'product', 'provider','productSize','productColor', 'packingType', 'amount', )



from .models import Stores, Inventory, InventoryEntry
class StoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stores
        fields = '__all__'




class InventoryEntrySerializer(serializers.ModelSerializer):

    stock = StoreStockSerializer(many=False, read_only=True)
    class Meta:
        model = InventoryEntry
        fields = ('id', 'amount','stock',)

class InventorySerializer(serializers.ModelSerializer):
    entries = InventoryEntrySerializer(many=True, read_only=True)
    class Meta:
        model = Inventory
        fields = ('id', 'owner','date', 'entries',)

