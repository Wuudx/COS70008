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
    path('featured/', views.featured_composer),
    path('featured/<int:pk>', views.featured_composer_detail),
    path('nationality/', views.nationality),
    path('nationality/<int:pk>', views.nationality_detail),
    path('composers/', views.all_composers),
    path('composers/<int:pk>', views.all_composers_detail),
    path('composition/', views.composition),
    path('composition/<int:pk>', views.composition_detail),
    path('discover_composers/<letter>', views.get_composer_by_letter),



]
