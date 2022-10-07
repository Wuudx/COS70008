from .views import *
from django.urls import path, re_path
from backend import views

urlpatterns = [
    path('composers', AllComposersView.as_view()), 
    path('composers/<int:pk>', ComposerView.as_view()),
    path('featured-composers', GetFeaturedComposers.as_view()),
    path('compositions', AllCompositionsView.as_view()),
    path('compositions/<int:pk>', CompositionView.as_view()),
    path('discover-composers/<letter>', GetComposersByLetter.as_view()),



]
