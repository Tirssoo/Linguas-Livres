from django.contrib import admin
from django.urls import path
from LinguasLivres import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path("traduzir/", views.traduzir_view),
]