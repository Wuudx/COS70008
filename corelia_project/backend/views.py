from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView, ListCreateAPIView
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.pagination import LimitOffsetPagination
from .models import Composer, Composition, Instrument, Nationality, ComposerNationality, CompositionInstrument, Publisher, BlogPost, BlogComment, ForumPost, ForumComment
from .serializers import *
from .paginations import CustomPagination, PopularBlogPagination
from rest_framework.permissions import IsAuthenticated
from knox.auth import TokenAuthentication
import datetime

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
        queryset = Composition.objects.select_related(
            'composer').all().order_by('name')
        # if there is a composer id supplied in the query params
        composer_id = self.request.query_params.get('composer_id', None)
        if composer_id is not None:  # if there is a composer id supplied in the query params, filter by it
            # if there is a composer id supplied in the query params, filter by it
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
    serializer_class = AllCompositionsSerializer

    def get_queryset(self):
        composer_id = self.kwargs['composer_id']
        return Composition.objects.all().filter(composer_id=composer_id)


class GetCompositionByLetter(ListAPIView):
    pagination_class = LimitOffsetPagination
    serializer_class = CompositionByLetterSerializer

    def get_queryset(self):
        letter = self.kwargs['letter']
        return Composition.objects.all().filter(name__startswith=letter)


class AllBlogPosts(ListCreateAPIView):
    pagination_class = LimitOffsetPagination
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostsSerializer


class BlogPostView(ListAPIView):
    pagination_class = LimitOffsetPagination
    serializer_class = BlogPostsSerializer

    def get_queryset(self):
        user_id = self.kwargs['post_id']
        return BlogPost.objects.all().filter(author=user_id)


class GetBlogPostsByUser(ListAPIView):
    pagination_class = LimitOffsetPagination
    serializer_class = BlogPostsSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return BlogPost.objects.all().filter(author=user_id)


class AllBlogComments(ListCreateAPIView):
    pagination_class = LimitOffsetPagination
    queryset = BlogComment.objects.all()
    serializer_class = BlogPostCommentsSerializer


class BlogCommentView(ListAPIView):
    pagination_class = LimitOffsetPagination
    serializer_class = BlogPostCommentsSerializer

    def get_queryset(self):
        post_id = self.kwargs['post_id']
        return BlogComment.objects.all().filter(post=post_id)


class AllForumPosts(ListCreateAPIView):
    pagination_class = LimitOffsetPagination
    queryset = ForumPost.objects.all()
    serializer_class = ForumPostsSerializer


class ForumPostView(ListAPIView):
    pagination_class = LimitOffsetPagination
    serializer_class = ForumPostsSerializer

    def get_queryset(self):
        post_id = self.kwargs['post_id']
        return ForumPost.objects.all().filter(id=post_id)


class AllForumComments(ListCreateAPIView):
    pagination_class = LimitOffsetPagination
    queryset = ForumComment.objects.all()
    serializer_class = ForumPostCommentsSerializer


class ForumCommentView(ListAPIView):
    serializer_class = ForumPostCommentsSerializer
    pagination_class = LimitOffsetPagination

    def get_queryset(self):
        post_id = self.kwargs['post_id']
        return ForumComment.objects.all().filter(post=post_id)


class GetPopularBlogPosts(ListAPIView):
    pagination_class = PopularBlogPagination
    queryset = BlogPost.objects.all().order_by('-votes')
    serializer_class = BlogPostsSerializer
