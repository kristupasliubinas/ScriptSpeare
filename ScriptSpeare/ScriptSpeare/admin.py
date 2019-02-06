from django.contrib import admin
from ScriptSpeare.models import Category,Play,Interpretation




class CategoryAdmin(admin.ModelAdmin):
	prepopulated_fields = {'slug':('name',)}
class PlayAdmin(admin.ModelAdmin):
	prepopulated_fields = {'slug':('title',)}
class InterpretationAdmin(admin.ModelAdmin):
	prepopulated_fields = {'slug':('male_lead_name','year',)}
	
# Update the registration to include this customised interface
admin.site.register(Category, CategoryAdmin)
admin.site.register(Play,PlayAdmin)
admin.site.register(Interpretation, InterpretationAdmin)