from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated

# Create your views here.
from django.contrib.auth.decorators import login_required
@login_required
def index(request):
    return render(request, 'dashboard.html', context={})

from .models import Inventory, InventoryEntry, Stores
from .serializers import StoresSerializer, InventorySerializer
class StoreList(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request,q=None, format=None):
        if q == None:
            stores = Stores.objects.all()
        else:
            stores = Stores.objects.filter(name__contains=q)
        
        
        serializer = StoresSerializer(stores, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = StoresSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

import time

class InventoryList(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request,pk=None, format=None):
        many= True
        if(pk):
            inventorys = Inventory.objects.prefetch_related('entries','entries__stock', 'entries__stock__provider','entries__stock__product', 'entries__stock__productSize', 'entries__stock__productColor').get(pk=pk)
            many = False
        else:
            inventorys = Inventory.objects.all()
        serializer = InventorySerializer(inventorys, many=many)
        return Response(serializer.data)

    def post(self, request, format=None):
        pass


'''
class InventoryEntrySerializerList(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        inventoryEntrys = InventoryEntry.objects.all()
        serializer = InventorySerializer(inventoryEntrys, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        pass
'''