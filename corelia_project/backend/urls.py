from .views import *
from django.urls import path, include, re_path
from backend import views

urlpatterns = [
    path('composer', ComposerView.as_view()),
    path('composition', CompositionView.as_view()),
    path('composerNationality', ComposerNationalityView.as_view()),
    path('compositionInstrument', CompositionInstrumentView.as_view()),
    path('publisher', PublisherView.as_view()),
    path('nationality', NationalityView.as_view()),
    path('instrument', InstrumentView.as_view()),
    re_path(r'^featured/$', views.featured_composer),
    re_path(r'^featured/([0-9])$', views.featured_composer_detail),

]
