from .views import *
from django.urls import path
from backend import views

urlpatterns = [
    path('composers', AllComposersView.as_view()),
    path('composers/<int:pk>/modify', ComposerUpdateView.as_view()),
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
    path('blogs/users/<int:user_id>', GetBlogPostsByUser.as_view()),
    path('blogs/<int:post_id>', BlogPostView.as_view()),
    path('blogs/comments', AllBlogComments.as_view()),
    path('blogs/comments/<int:post_id>', BlogCommentView.as_view()),
    path('blogs/popular', GetPopularBlogPosts.as_view()),
    path('blogs/<int:month>/posts', GetBlogPostsByMonth.as_view()),

    path('blogs/<int:pk>/modify', ModifyBlogPost.as_view()),
    path('blogs/comments/<int:pk>/modify', ModifyBlogComment.as_view()),

    path('forums', AllForumPosts.as_view()),
    path('forums/<int:post_id>', ForumPostView.as_view()),
    path('forums/comments/all', AllForumComments.as_view()),
    path('forums/comments/<post_id>', ForumCommentView.as_view()),
    path('forums/<int:pk>/modify', ModifyForumPost.as_view()),
    path('forums/comments/<int:pk>/modify', ModifyForumComment.as_view()),
    path('forums/<int:year>/<int:month>/posts', ForumPostByMonthAndYear.as_view()),
    path('forums/year/<int:year>/posts', ForumPostByYear.as_view()),
    path('forums/month/<int:month>/posts', ForumPostByMonth.as_view()),

    # Admin Dash
    path('dash/users/<int:count>', GetUsersByJoinDate.as_view()),
    path('dash/blogs/<int:count>', GetBlogPostsByVotes.as_view()),
    path('dash/forums/<int:count>', GetForumPostsByVotes.as_view()),
    path('dash/users/week/count', GetNewUsersThisWeek.as_view()),
    path('dash/blogs/week/count', GetBlogPostsFromThisWeek.as_view()),
    path('dash/forums/week/count', GetForumPostsFromThisWeek.as_view()),
    path('dash/contact/messages', GetNewUsersThisWeek.as_view()),

    path('contact/form/submission', ContactUsView.as_view()),
]
