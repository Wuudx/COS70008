from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.pagination import LimitOffsetPagination
from .models import Composer, Composition, Instrument, Nationality, ComposerNationality, CompositionInstrument, Publisher
from .serializers import *
from .paginations import CustomPagination

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
    serializer_class = AllCompositionsSerializer

    def get_queryset(self):
        queryset = Composition.objects.select_related('composer').all()
        composer_id = self.request.query_params.get('composer_id', None)
        if composer_id is not None:
            queryset = queryset.filter(composer_id=composer_id)
        return queryset


class CompositionView(ListAPIView):
    serializer_class = CompositionSerializer

    def get_queryset(self):
        return Composition.objects.filter(id=self.kwargs['pk'])


class GetFeaturedComposers(ListAPIView):
    pagination_class = LimitOffsetPagination
    queryset = Composer.objects.all().filter(featured=True)
    serializer_class = FeaturedComposerSerializer


class GetComposersByLetter(ListAPIView):
    pagination_class = LimitOffsetPagination
    serializer_class = ComposersByLetterSerializer

    def get_queryset(self):
        letter = self.kwargs['letter']
        return Composer.objects.all().filter(firstName__startswith=letter)


class SearchBarGetComposer(ListAPIView):
    pagination_class = CustomPagination
    serializer_class = SearchBarComposerSerializer

    def get_queryset(self):
        query = self.kwargs['query']
        return Composer.objects.all().filter(firstName__contains=query)


class SearchBarGetComposition(ListAPIView):
    pagination_class = CustomPagination
    serializer_class = SearchBarCompositionSerializer

    def get_queryset(self):
        query = self.kwargs['query']
        return Composition.objects.all().filter(name__contains=query)


class SearchBarGetPublisher(ListAPIView):
    pagination_class = CustomPagination
    serializer_class = SearchBarPublisherSerializer

    def get_queryset(self):
        query = self.kwargs['query']
        return Publisher.objects.all().filter(name__contains=query)


class GetCompositionsByComposer(ListAPIView):
    pagination_class = CustomPagination
    serializer_class = CompositionsByComposerSerializer

    def get_queryset(self):
        composer_id = self.kwargs['composer_id']
        return Composition.objects.all().filter(composer_id=composer_id)
