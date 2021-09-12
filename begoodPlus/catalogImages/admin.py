from django.contrib import admin

from .models import CatalogImage
# Register your models here.
class CatalogImageAdmin(admin.ModelAdmin):
    list_display = ('id', 'render_thumbnail', 'title', 'description','cost_price_dis','client_price_dis','recomended_price_dis')
    readonly_fields = ('id', 'render_thumbnail', 'render_image',)
    search_fields = ('title',)

admin.site.register(CatalogImage,CatalogImageAdmin)