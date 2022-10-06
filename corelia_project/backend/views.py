from django.shortcuts import render
from rest_framework import generics
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.decorators import authentication_classes, permission_classes
from .models import Composer, Composition, Instrument, Nationality, ComposerNationality, CompositionInstrument, Publisher, BlogPost
from .serializers import FeaturedComposerSerializer, ComposerSerializer, CompositionSerializer, ComposerNationalitySerializer, CompositionInstrumentSerializer, PublisherSerializer, NationalitySerializer, InstrumentSerializer, BlogPostSerializer

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

        serializer = FeaturedComposerSerializer(composers, context={'request': request}, many=True)

        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = FeaturedComposerSerializer(composers=request.data)

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
        serializer = FeaturedComposerSerializer(composer, data=request.data, context={'request': request})

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        composer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def nationality(request):
    if request.method == 'GET':
        nationality = Nationality.objects.all()

        serializer = NationalitySerializer(nationality, context={'request': request}, many=True)

        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = NationalitySerializer(nationality=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def nationality_detail(request, pk):
    try:
        nationality = Nationality.objects.get(pk=pk)
    except Nationality.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = NationalitySerializer(nationality, data=request.data, context={'request': request})

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        nationality.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def all_composers(request):
    if request.method == 'GET':
        composers = Composer.objects.all()

        serializer = ComposerSerializer(composers, context={'request': request}, many=True)

        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = ComposerSerializer(composers=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def all_composers_detail(request, pk):
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


@api_view(['GET', 'POST'])
def composition(request):
    if request.method == 'GET':
        composition = Composition.objects.all()

        serializer = CompositionSerializer(composition, context={'request': request}, many=True)

        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = CompositionSerializer(composition=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def composition_detail(request, pk):
    try:
        composition = Composition.objects.get(pk=pk)
    except Composition.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = CompositionSerializer(composition, data=request.data, context={'request': request})

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        composition.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def all_blog_posts(request):
    if request.method == 'GET':
        blog_posts = BlogPost.objects.all()

        serializer = BlogPostSerializer(blog_posts, context={'request': request}, many=True)

        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = BlogPostSerializer(blog_posts=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def all_blog_posts_detail(request, pk):
    try:
        blog_post = BlogPost.objects.get(pk=pk)
    except BlogPost.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = BlogPostSerializer(blog_post, data=request.data, context={'request': request})

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        blog_post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)