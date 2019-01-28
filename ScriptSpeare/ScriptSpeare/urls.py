from django.conf.urls import url
from django.conf.urls import include
from ScriptSpeare import views
from django.urls import path

urlpatterns=[
	url(r'^$', views.index, name="index"),
	url(r'^$ScriptSpeare', views.index, name='index'),
	url(r'^$scriptspeare', views.index, name='index'),
	url(r'^category/(?P<category_name_slug>[\w\-]+)/$', views.show_category, name='show_category'),
	
]