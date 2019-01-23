from django.contrib import admin
from ScriptSpeare.models import Category,Play,Interpretation


admin.site.register(Play)
admin.site.register(Interpretation)

class CategoryAdmin(admin.ModelAdmin):
	prepopulated_fields = {'slug':('name',)}
# Update the registration to include this customised interface
admin.site.register(Category, CategoryAdmin)