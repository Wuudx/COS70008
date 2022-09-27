from .views import *
from django.urls import path, include

urlpatterns = [
    path('composer/api', ComposerView.as_view()),
    path('composition/api', CompositionView.as_view()),
    path('composerNationality/api', ComposerNationalityView.as_view()),
    path('compositionInstrument/api', CompositionInstrumentView.as_view()),
    path('publisher/api', PublisherView.as_view()),
    path('nationality/api', NationalityView.as_view()),
    path('instrument/api', InstrumentView.as_view())
]