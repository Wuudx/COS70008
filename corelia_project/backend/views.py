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
        return Composition.objects.select_related('composer').all()


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

# @api_view(['GET', 'POST'])
# def all_blog_posts(request):
#     if request.method == 'GET':
#         blog_posts = BlogPost.objects.all()

#         serializer = BlogPostSerializer(blog_posts, context={'request': request}, many=True)

#         return Response(serializer.data)
    
#     elif request.method == 'POST':
#         serializer = BlogPostSerializer(blog_posts=request.data)

#         if serializer.is_valid():
#             serializer.save()
#             return Response(status=status.HTTP_201_CREATED)

#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['PUT', 'DELETE'])
# def all_blog_posts_detail(request, pk):
#     try:
#         blog_post = BlogPost.objects.get(pk=pk)
#     except BlogPost.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'PUT':
#         serializer = BlogPostSerializer(blog_post, data=request.data, context={'request': request})

#         if serializer.is_valid():
#             serializer.save()
#             return Response(status=status.HTTP_204_NO_CONTENT)
        
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#     elif request.method == 'DELETE':
#         blog_post.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)

class AllBlogPostsView(ListAPIView):
    pagination_class = LimitOffsetPagination
    queryset = BlogPost.objects.all()
    serializer_class = AllComposersSerializer

class BlogPostView(ListAPIView):
    serializer_class = BlogPostSerializer

    def get_queryset(self):
        return BlogPost.objects.filter(id=self.kwargs['pk'])