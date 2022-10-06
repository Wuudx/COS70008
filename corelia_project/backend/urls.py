from .views import *
from django.urls import path, re_path
from backend import views

urlpatterns = [
    path('composers', AllComposersView.as_view()),
    path('composers/<int:pk>', ComposerView.as_view()),
    path('compositions', AllCompositionsView.as_view()),
    path('compositions/<int:pk>', CompositionView.as_view()),
    path('composerNationality', ComposerNationalityView.as_view()),
    path('compositionInstruments', CompositionInstrumentView.as_view()),
    path('publishers', PublisherView.as_view()),
    path('nationality', NationalityView.as_view()),
    path('instruments', InstrumentView.as_view()),
    re_path(r'^featured/$', views.featured_composer),
    re_path(r'^featured/([0-9])$', views.featured_composer_detail),
    re_path(r'^nationality/$', views.nationality),
    re_path(r'^nationality/([0-9])$', views.nationality_detail),
    re_path(r'^composers/$', views.all_composers),
    re_path(r'^composers/([0-9])$', views.all_composers_detail),
    re_path(r'^composition/$', views.composition),
    re_path(r'^composition/([0-9])$', views.composition_detail),



]
