from .views import *
from django.urls import path, include

urlpatterns = [
    path('composer/api', ComposerView.as_view()),
]