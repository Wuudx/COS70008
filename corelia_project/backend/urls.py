from .views import *
from django.urls import path, include, re_path
from backend import views

urlpatterns = [
    path('composer/api', ComposerView.as_view()),
    path('composition/api', CompositionView.as_view()),
    path('composerNationality/api', ComposerNationalityView.as_view()),
    path('compositionInstrument/api', CompositionInstrumentView.as_view()),
    path('publisher/api', PublisherView.as_view()),
    path('nationality/api', NationalityView.as_view()),
    path('instrument/api', InstrumentView.as_view()),
    re_path(r'^api/featured/$', views.featured_composer),
    re_path(r'^api/featured/([0-9])$', views.featured_composer_detail),
    
]