from django.shortcuts import render
from rest_framework import generics
from .models import Composer, Composition, Instrument, Nationality, ComposerNationality, CompositionInstrument, Publisher
from .serializers import ComposerSerializer, CompositionSerializer, ComposerNationalitySerializer, CompositionInstrumentSerializer, PublisherSerializer, NationalitySerializer, InstrumentSerializer

# Create your views here.

class ComposerView(generics.CreateAPIView):
    queryset = Composer.objects.all()
    serializer_class = ComposerSerializer

class CompositionView(generics.CreateAPIView):
    queryset = Composition.objects.all()
    serializer_class = CompositionSerializer

class ComposerNationalityView(generics.CreateAPIView):
    queryset = ComposerNationality.objects.all()
    serializer_class = ComposerNationalitySerializer

class CompositionInstrumentView(generics.CreateAPIView):
    queryset = CompositionInstrument.objects.all()
    serializer_class = CompositionInstrumentSerializer

class PublisherView(generics.CreateAPIView):
    queryset = Publisher.objects.all()
    serializer_class = PublisherSerializer

class NationalityView(generics.CreateAPIView):
    queryset = Nationality.objects.all()
    serializer_class = NationalitySerializer

class InstrumentView(generics.CreateAPIView):
    queryset = Instrument.objects.all()
    serializer_class = InstrumentSerializer


    
