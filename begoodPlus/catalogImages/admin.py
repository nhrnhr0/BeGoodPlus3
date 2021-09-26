from django.contrib import admin
from advanced_filters.admin import AdminAdvancedFiltersMixin
from django.utils.safestring import mark_safe
from django.utils.translation import gettext_lazy  as _
from django.urls import reverse

from .models import CatalogImage
class tabelInline(admin.TabularInline):
    model = CatalogImage.detailTabel.through
    fields = ['id','provider','dis_colors','dis_sizes', 'dis_cost_price']
    readonly_fields = ['id','provider','dis_colors', 'dis_sizes', 'dis_cost_price']
    extra=0

    
    def provider(self, instance):
        return instance.catalogimagedetail.provider
    
    def dis_colors(self, instance):
        clrs = instance.catalogimagedetail.colors
        ret = ''
        for c in clrs.all():
            ret += c.name + ', '
        return ret
    dis_colors.short_description = _('colors')
    
    def dis_sizes(self, instance):
        sizes = instance.catalogimagedetail.sizes
        ret = ''
        for s in sizes.all():
            ret += s.size + ', '
        return ret
    dis_colors.short_description = _('sizes')
    
    def dis_cost_price(self, instance):
        return instance.catalogimagedetail.cost_price

    dis_cost_price.short_description = _('cost price')
    
    
# Register your models here.
class CatalogImageAdmin(AdminAdvancedFiltersMixin, admin.ModelAdmin):
    list_display = ('id', 'render_thumbnail', 'title', 'barcode','cost_price_dis','client_price_dis','recomended_price_dis','get_albums')
    list_display_links = ('title',)
    inlines = (tabelInline,)
    readonly_fields = ('id', 'render_thumbnail', 'render_image',)
    search_fields = ('title','description')
    list_filter = ('providers','sizes','colors','albums')
    filter_horizontal = ('colors', 'sizes','providers')
    list_per_page = 50
    advanced_filter_fields = (
        'title', 'description','sizes__size', 'colors__name','provides__name')

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        return qs.prefetch_related('albums')
        

    def get_albums(self, obj):
        ret = '<ul style="background-color:#ddd;">'
        for a in obj.albums.all():
            ret += f'<li> {CatalogImageAdmin.url_to_edit_object(a)} </li>'
        ret += '</ul>'
        return mark_safe(ret)
        #return ",".join([a.title for a in obj.albums.all()])
    
    def url_to_edit_object(obj):
        url = reverse('admin:%s_%s_change' % (obj._meta.app_label,  obj._meta.model_name),  args=[obj.id] )
        return u'<a href="%s">%s</a>' % (url,  obj.__str__())
admin.site.register(CatalogImage,CatalogImageAdmin)