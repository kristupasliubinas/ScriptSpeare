"""script URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import url
from django.conf.urls import include
from ScriptSpeare import views
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path

urlpatterns = [
	url(r'^$', views.index, name='index'),
	url(r'^ScriptSpeare/', include('ScriptSpeare.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^category/(?P<category>[\w\-]+)/$', views.show_category, name='show_category'),
    path('<category>/<play>/', views.show_play, name='show_play'),
    path('<category>/<play>/<interp_id>/', views.show_play, name='show_play'),
    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
