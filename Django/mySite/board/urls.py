from django.urls import path
from .views import IndexView, DetailView

urlpatterns = [
    path('', IndexView.as_view()),
    path('detail/<int:id>/', DetailView.as_view()),
]
