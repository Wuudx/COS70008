from .views import *
from django.urls import path, re_path
from backend import views

urlpatterns = [
    path('composers', AllComposersView.as_view()),
    path('composers/<int:pk>', ComposerView.as_view()),
    path('featured-composers', GetFeaturedComposers.as_view()),
    path('compositions', AllCompositionsView.as_view()),
    path('compositions/<int:pk>', CompositionView.as_view()),
    path('discover-composers/<letter>', GetComposersByLetter.as_view()),
    path('search-composers/<query>', SearchBarGetComposer.as_view()),
    path('search-compositions/<query>', SearchBarGetComposition.as_view()),
    path('search-publishers/<query>', SearchBarGetPublisher.as_view()),
    path('composers/<composer_id>/compositions', GetCompositionsByComposer.as_view()),
	#re_path(r'blog/$', views.all_blog_posts),
    #re_path(r'blog/([0-9])$', views.all_blog_posts_detail),
    path('blog', AllBlogPostsView.as_view()),
    path('blog/<int:pk>', BlogPostView.as_view()),
]
