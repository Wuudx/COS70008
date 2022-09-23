from django.urls import path
from .views import *

urlpatterns = [
    path('',index),
    path('blog', index),
    path('about', index),
    path('repertoire-library', index),
    path('contact-us', index)

]