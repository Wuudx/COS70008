from django.shortcuts import render
from rest_framework import generics
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
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

@api_view(['GET', 'POST'])
def featured_composer(request):
    if request.method == 'GET':
        composers = Composer.objects.filter(featured=True)

        serializer = ComposerSerializer(composers, context={'request': request}, many=True)

        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = ComposerSerializer(composers=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def featured_composer_detail(request, pk):
    try:
        composer = Composer.objects.get(pk=pk)
    except Composer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = ComposerSerializer(composer, data=request.data, context={'request': request})

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        composer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
