from django.db import models

# Create your models here.
from catalogImages.models import CatalogImage
from core.models import BeseContactInformation


class CustomerCart(BeseContactInformation):
    products = models.ManyToManyField(to=CatalogImage)
    