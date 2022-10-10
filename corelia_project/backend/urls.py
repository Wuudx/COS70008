from .views import *
from django.urls import path
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
    path('search-blogs/<query>', SearchBarGetBlogPosts.as_view()),
    path('composers/<composer_id>/compositions',
         GetCompositionsByComposer.as_view()),
    path('blogs', AllBlogPosts.as_view()),
    path('blogs/<int:user_id>', GetBlogPostsByUser.as_view()),
    path('blogs/posts/<int:post_id>', BlogPostView.as_view()),
    path('blogs/comments', AllBlogComments.as_view()),
    path('blogs/comments/<int:post_id>', BlogCommentView.as_view()),
    path('blogs/popular', GetPopularBlogPosts.as_view()),
    path('blogs/<int:month>/posts', GetBlogPostsByMonth.as_view()),
    path('forums', AllForumPosts.as_view()),
    path('forums/<int:post_id>', ForumPostView.as_view()),
    path('forums/comments/all', AllForumComments.as_view()),
    path('forums/comments/<post_id>', ForumCommentView.as_view()),
]
