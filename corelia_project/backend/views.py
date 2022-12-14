import datetime
from time import strftime

from django.shortcuts import render
from django.utils import timezone
from knox.auth import TokenAuthentication
from numpy import quantile
from rest_framework import permissions, status
from rest_framework.decorators import (api_view, authentication_classes,
                                       permission_classes)
from rest_framework.generics import (CreateAPIView, DestroyAPIView,
                                     ListAPIView, ListCreateAPIView,
                                     RetrieveAPIView,
                                     RetrieveUpdateDestroyAPIView,
                                     UpdateAPIView)
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from users.serializers import UserSerializer

from .models import (BlogComment, BlogPost, Composer, ComposerNationality,
                     Composition, CompositionInstrument, ForumComment,
                     ForumPost, Instrument, Nationality, Publisher, User)
from .paginations import CustomPagination, PopularBlogPagination
from .serializers import *

# Create your views here.


def set_permission_classes(obj):
    if obj.request.method in ["POST", "DELETE"]:
        obj.permission_classes = [permissions.IsAuthenticated]
    else:
        obj.permission_classes = [permissions.AllowAny]


class AllNationalitiesView(ListAPIView):
    pagination_class = LimitOffsetPagination
    queryset = Nationality.objects.all()
    serializer_class = AllNationalitiesSerializer


class AllComposersView(ListAPIView):
    pagination_class = LimitOffsetPagination
    queryset = Composer.objects.all()
    serializer_class = AllComposersSerializer


class ComposerUpdateView(RetrieveUpdateDestroyAPIView):
    queryset = Composer.objects.all()
    serializer_class = ComposerSerializer


class ComposerView(ListAPIView):
    serializer_class = ComposerSerializer

    def get_queryset(self):
        return Composer.objects.filter(id=self.kwargs['pk'])


class AllPublishersView(ListAPIView):
    pagination_class = LimitOffsetPagination
    serializer_class = AllPublishersSerializer
    queryset = Publisher.objects.all()


class AllInstrumentsView(ListAPIView):
    pagination_class = LimitOffsetPagination
    serializer_class = AllInstrumentsSerializer
    queryset = Instrument.objects.all()


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
    serializer_class = ComposerSerializer
    


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

        return Composer.objects.all().filter(firstName__icontains=query) | Composer.objects.all().filter(lastName__icontains=query)


class SearchBarGetComposition(ListAPIView):
    pagination_class = CustomPagination
    serializer_class = SearchBarCompositionSerializer

    def get_queryset(self):
        query = self.kwargs['query']
        return Composition.objects.all().filter(name__icontains=query)


class SearchBarGetPublisher(ListAPIView):
    pagination_class = CustomPagination
    serializer_class = SearchBarPublisherSerializer

    def get_queryset(self):
        query = self.kwargs['query']
        return Publisher.objects.all().filter(name__icontains=query)


class SearchBarGetBlogPosts(ListAPIView):
    pagination_class = CustomPagination
    serializer_class = SearchBarBlogPostsSerializer

    def get_queryset(self):
        query = self.kwargs['query']
        return BlogPost.objects.filter(title__icontains=query)


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
    queryset = BlogPost.objects.all().order_by("-date_posted")
    serializer_class = BlogPostsSerializer

    @permission_classes([IsAuthenticated, IsAdminUser])
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class ModifyBlogPost(RetrieveUpdateDestroyAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostsSerializer

    @permission_classes([IsAuthenticated, IsAdminUser])
    def perform_update(self, serializer):
        serializer.save(user=self.request.user)


class BlogPostView(ListAPIView):
    pagination_class = LimitOffsetPagination
    serializer_class = BlogPostsSerializer

    def get_queryset(self):
        post_id = self.kwargs['post_id']
        return BlogPost.objects.all().filter(id=post_id)


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

    @permission_classes([IsAuthenticated, ])
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class BlogCommentView(ListAPIView):
    pagination_class = LimitOffsetPagination
    serializer_class = BlogPostCommentsSerializer

    def get_queryset(self):
        post_id = self.kwargs['post_id']
        return BlogComment.objects.all().filter(post=post_id)


class ModifyBlogComment(RetrieveUpdateDestroyAPIView):
    queryset = BlogComment.objects.all()
    serializer_class = BlogPostCommentsSerializer

    @permission_classes([IsAuthenticated, ])
    def perform_update(self, serializer):
        serializer.save(user=self.request.user)


class AllForumPosts(ListCreateAPIView):
    pagination_class = LimitOffsetPagination
    queryset = ForumPost.objects.all().order_by('-date_posted')
    serializer_class = ForumPostsSerializer

    @permission_classes([IsAuthenticated, ])
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ModifyForumPost(RetrieveUpdateDestroyAPIView):
    queryset = ForumPost.objects.all()
    serializer_class = ForumPostsSerializer

    @permission_classes([IsAuthenticated, ])
    def perform_update(self, serializer):
        serializer.save(user=self.request.user)


class ForumPostView(ListAPIView):
    pagination_class = LimitOffsetPagination
    serializer_class = ForumPostsSerializer

    def get_queryset(self):
        post_id = self.kwargs['post_id']
        print(post_id)
        return ForumPost.objects.all().filter(id=post_id)


class AllForumComments(ListCreateAPIView):
    pagination_class = LimitOffsetPagination
    queryset = ForumComment.objects.all()
    serializer_class = ForumPostCommentsSerializer

    @permission_classes([IsAuthenticated, ])
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ForumCommentView(ListAPIView):
    serializer_class = ForumPostCommentsSerializer
    pagination_class = LimitOffsetPagination

    def get_queryset(self):
        post_id = self.kwargs['post_id']
        return ForumComment.objects.all().filter(post=post_id)


class ModifyForumComment(RetrieveUpdateDestroyAPIView):
    queryset = ForumComment.objects.all()
    serializer_class = ForumPostCommentsSerializer

    @permission_classes([IsAuthenticated, ])
    def perform_update(self, serializer):
        serializer.save(user=self.request.user)


class ForumPostByMonthAndYear(ListAPIView):
    serializer_class = ForumPostsSerializer
    pagination_class = LimitOffsetPagination

    def get_queryset(self):
        month = self.kwargs['month']
        year = self.kwargs['year']
        return ForumPost.objects.filter(date_posted__month=month, date_posted__year=year).order_by("-date_posted")


class ForumPostByYear(ListAPIView):
    serializer_class = ForumPostsSerializer
    pagination_class = LimitOffsetPagination

    def get_queryset(self):
        year = self.kwargs['year']
        return ForumPost.objects.filter(date_posted__year=year).order_by("-date_posted")


class ForumPostByMonth(ListAPIView):
    serializer_class = ForumPostsSerializer
    pagination_class = LimitOffsetPagination

    def get_queryset(self):
        month = self.kwargs['month']
        return ForumPost.objects.filter(date_posted__month=month).order_by("-date_posted")


class GetPopularBlogPosts(ListAPIView):
    pagination_class = PopularBlogPagination
    queryset = BlogPost.objects.all().order_by('-votes')
    serializer_class = BlogPostsSerializer


class GetBlogPostsByMonth(ListAPIView):
    pagination_class = CustomPagination
    serializer_class = BlogPostsSerializer

    def get_queryset(self):
        month = self.kwargs['month']
        return BlogPost.objects.filter(date_posted__month=month).order_by("-date_posted")


class GetNewUsersThisWeek(ListAPIView):
    pagination_class = CustomPagination
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated, IsAdminUser,)

    def get_queryset(self):
        return User.objects.filter(date_joined__gte=datetime.date.today() - datetime.timedelta(days=7))


class GetBlogPostsFromThisWeek(ListAPIView):
    pagination_class = CustomPagination
    serializer_class = BlogPostsSerializer
    permission_classes = (IsAuthenticated, IsAdminUser,)

    def get_queryset(self):
        return BlogPost.objects.filter(date_posted__gte=datetime.date.today() - datetime.timedelta(days=7))


class GetForumPostsFromThisWeek(ListAPIView):
    pagination_class = CustomPagination
    serializer_class = ForumPostsSerializer
    permission_classes = (IsAdminUser,)

    def get_queryset(self):
        return ForumPost.objects.filter(date_posted__gte=datetime.date.today() - datetime.timedelta(days=7))


class GetContactMessages(ListAPIView):
    pagination_class = CustomPagination
    serializer_class = ContactUsSerializer
    permission_classes = (IsAuthenticated, IsAdminUser,)

    def get_queryset(self):
        return ContactUs.objects.all()


# Admin Dashboard - Analytics

class GetUsersByJoinDate(ListAPIView):
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated, IsAdminUser,)
    # pagination_class = ?

    def get_queryset(self):
        # Currently limits results by count argument. Could be by date? Use pagination instead?
        count = self.kwargs['count']
        return User.objects.all().order_by('-date_joined')[:count]


class GetBlogPostsByVotes(ListAPIView):
    serializer_class = BlogPostsSerializer
    permission_classes = (IsAuthenticated, IsAdminUser,)
    # pagination_class = ?

    def get_queryset(self):
        # Currently limits results by count argument. Could be by date? Use pagination instead?
        count = self.kwargs['count']
        return BlogPost.objects.all().order_by('-votes')[:count]


class GetForumPostsByVotes(ListAPIView):
    serializer_class = ForumPostsSerializer
    permission_classes = (IsAuthenticated, IsAdminUser,)
    # pagination_class = ?

    def get_queryset(self):
        # Currently limits results by count argument. Could be by date? Use pagination instead?
        count = self.kwargs['count']
        return ForumPost.objects.all().order_by('-votes')[:count]

# Admin Dashboard - Database


class CreateNationality(CreateAPIView):
    serializer_class = CreateNationalitySerializer
    permission_classes = (IsAuthenticated, IsAdminUser,)
    # pagination_class = ?
    queryset = Nationality.objects.all()

    def perform_create(self, serializer):
        serializer.save()


class CreateComposer(CreateAPIView):
    serializer_class = CreateComposerSerializer
    permission_classes = (IsAuthenticated, IsAdminUser,)
    # pagination_class = ?
    queryset = Composer.objects.all()

    def perform_create(self, serializer):
        serializer.save()


class CreateInstrument(CreateAPIView):
    serializer_class = CreateInstrumentSerializer
    permission_classes = (IsAuthenticated, IsAdminUser,)
    # pagination_class = ?
    queryset = Instrument.objects.all()

    def perform_create(self, serializer):
        serializer.save()


class CreatePublisher(CreateAPIView):
    serializer_class = CreatePublisherSerializer
    permission_classes = (IsAuthenticated, IsAdminUser,)
    # pagination_class = ?
    queryset = Publisher.objects.all()

    def peform_create(self, serializer):
        serializer.save()


class CreateComposition(CreateAPIView):
    serializer_class = CreateCompositionSerializer
    permission_classes = (IsAuthenticated, IsAdminUser,)
    # pagination_class = ?
    queryset = Composition.objects.all()

    def perform_create(self, serializer):
        serializer.save()


class ContactUsView(ListCreateAPIView):
    queryset = ContactUs.objects.all()
    serializer_class = ContactUsSerializer
