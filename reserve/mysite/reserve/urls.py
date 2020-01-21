from django.urls import path
from . import views

app_name = 'reserve'
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:id>/', views.reserve, name='reserve'),
]
