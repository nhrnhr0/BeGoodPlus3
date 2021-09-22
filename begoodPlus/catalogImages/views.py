from django.shortcuts import render
from .models import CatalogImage
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .serializers import CatalogImageSerializer
from rest_framework.request import Request

# Create your views here.
class CatalogImageViewSet(viewsets.ModelViewSet):
    queryset = CatalogImage.objects.all()
    serializer_class = CatalogImageSerializer


    def update(self, request, pk=None):
        serializer_context = {
            'request': request,
        } 
        print('hey hey', request, pk, format)
        obj = self.get_object(pk)
        serializer = CatalogImageSerializer(obj, data=request.data, context=serializer_context)
        if serializer.is_valid():
            print('serializer is valid, saving...')
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
