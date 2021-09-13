from django.contrib import admin
from advanced_filters.admin import AdminAdvancedFiltersMixin
from django.utils.translation import gettext_lazy  as _

from .models import CatalogImage
# Register your models here.
class CatalogImageAdmin(AdminAdvancedFiltersMixin, admin.ModelAdmin):
    list_display = ('id', 'render_thumbnail', 'title', 'desc','cost_price_dis','client_price_dis','recomended_price_dis',)
    list_display_links = ('title',)
    readonly_fields = ('id', 'render_thumbnail', 'render_image',)
    search_fields = ('title','description')
    list_filter = ('providers','sizes','colors',)
    filter_horizontal = ('colors', 'sizes','providers')
    advanced_filter_fields = (
        'title', 'description','sizes__size', 'colors__name','provides__name')
admin.site.register(CatalogImage,CatalogImageAdmin)