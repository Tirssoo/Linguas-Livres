from django.contrib import admin
from django.urls import path
from LinguasLivres import views
from LinguasLivres.views import traduzir_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path("traduzir/", traduzir_view),
]