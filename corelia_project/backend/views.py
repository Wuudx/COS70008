from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.pagination import LimitOffsetPagination
from .models import Composer, Composition, Instrument, Nationality, ComposerNationality, CompositionInstrument, Publisher
from .serializers import *

# Create your views here.


class AllComposersView(ListAPIView):
    pagination_class = LimitOffsetPagination
    queryset = Composer.objects.all()
    serializer_class = AllComposersSerializer


class ComposerView(ListAPIView):
    serializer_class = ComposerSerializer

    def get_queryset(self):
        return Composer.objects.filter(id=self.kwargs['pk'])


class AllCompositionsView(ListAPIView):
    pagination_class = LimitOffsetPagination
    queryset = Composition.objects.all()
    serializer_class = AllCompositionsSerializer


class CompositionView(ListAPIView):
    serializer_class = CompositionSerializer

    def get_queryset(self):
        return Composition.objects.filter(id=self.kwargs['pk'])

class GetFeaturedComposers(ListAPIView):
    pagination_class = LimitOffsetPagination
    serializer_class = FeaturedComposerSerializer
    queryset = Composer.objects.all().filter(featured=True)
    
    
class GetComposersByLetter(ListAPIView):
    pagination_class = LimitOffsetPagination
    serializer_class = ComposersByLetterSerializer

    def get_queryset(self):
        letter = self.kwargs['letter']
        return Composer.objects.all().filter(firstName__startswith=letter)

    