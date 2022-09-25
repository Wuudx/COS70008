from django.urls import path
from .views import *

urlpatterns = [
    path('',index),
    path('blog', index),
    path('about', index),
    path('discover-composers', index),
    path('discover-composers/search', index),
    path('watch-listen', index),
    path('repertoire-library', index),
    path('join-corelia', index),
    path('contact-us', index)

]