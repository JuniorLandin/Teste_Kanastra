from django.urls import path # type: ignore
from app_cadastro_kanastra import views
from django.http import HttpResponse # type: ignore

urlpatterns = [
    path('charges', views.charges, name='charges')
    path('', lambda x: HttpResponse('Teste Django'))
]