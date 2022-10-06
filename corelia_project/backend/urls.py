from .views import *
from django.urls import path, re_path
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
    re_path(r'^nationality/$', views.nationality),
    re_path(r'^nationality/([0-9])$', views.nationality_detail),
    re_path(r'^composers/$', views.all_composers),
    re_path(r'^composers/([0-9])$', views.all_composers_detail),
    re_path(r'^composition/$', views.composition),
    re_path(r'^composition/([0-9])$', views.composition_detail),
    re_path(r'blog/$', views.all_blog_posts),
    re_path(r'blog/([0-9])$', views.all_blog_posts_detail),

]
