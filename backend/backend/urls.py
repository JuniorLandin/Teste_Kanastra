from django.urls import path
from app_cadastro_kanastra import views

urlpatterns = [
    path('charges', views.charges, name='charges')
]