from .views import *
from django.urls import path, re_path
from backend import views

urlpatterns = [
    path('composers', AllComposersView.as_view()),
    path('composers/<int:pk>', ComposerView.as_view()),
    path('featured-composers', GetFeaturedComposers.as_view()),
    path('compositions', AllCompositionsView.as_view()),
    path('compositions/<int:pk>', CompositionView.as_view()),
    path('compositions/<letter>', GetCompositionByLetter.as_view()),
    path('discover-composers/<letter>', GetComposersByLetter.as_view()),
    path('search-composers/<query>', SearchBarGetComposer.as_view()),
    path('search-compositions/<query>', SearchBarGetComposition.as_view()),
    path('search-publishers/<query>', SearchBarGetPublisher.as_view()),
    path('composers/<composer_id>/compositions', GetCompositionsByComposer.as_view()),
    path('blogs', AllBlogPosts.as_view()),
    path('blogs/<user_id>', BlogPost.as_view()),
    path('blogs/posts/<post_id>', BlogPost.as_view()),
    path('blogs/comments', AllBlogComments.as_view()),
    path('forums', AllForumPosts.as_view()),
    path('forums/<user_id>', ForumPost.as_view()),
    path('forum/comments', AllForumComments.as_view()),
    path('forum/comments/<post_id>', ForumComment.as_view()),





]
