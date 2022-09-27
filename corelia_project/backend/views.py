from django.shortcuts import render
from rest_framework import generics
from .models import Composer, Composition, Instrument, Nationality, ComposerNationality, CompositionInstrument, Publisher
from .serializers import ComposerSerializer

# Create your views here.

class ComposerView(generics.CreateAPIView):
    queryset = Composer.objects.all()
    serializer_class = ComposerSerializer
    
