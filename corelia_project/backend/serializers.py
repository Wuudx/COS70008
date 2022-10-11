from rest_framework import serializers

from .models import Composer, Composition, Instrument, Nationality, ComposerNationality, CompositionInstrument, Publisher, BlogPost, BlogComment, ForumPost, ForumComment

from django.contrib.postgres.aggregates import StringAgg

class AllComposersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Composer
        fields = ['id', 'firstName', 'lastName', 'image']


class ComposerSerializer(serializers.ModelSerializer):
    #nationality_name = serializers.SerializerMethodField()
    nationality_names = serializers.SerializerMethodField()

    #def get_nationality_name (self, obj):
        #return obj.nationality.name
    def get_nationality_names (self, obj):
        return ComposerNationality.objects.filter(composer=obj).aggregate(names=StringAgg('nationality__name', delimiter='/', ordering='id'))['names']
        
    class Meta:
        model = Composer
        fields = '__all__'


class AllCompositionsSerializer(serializers.ModelSerializer):
    first_name = serializers.SerializerMethodField()
    last_name = serializers.SerializerMethodField()
    composer_id = serializers.SerializerMethodField()

    def get_first_name(self, obj):
        return obj.composer.firstName

    def get_last_name(self, obj):
        return obj.composer.lastName

    def get_composer_id(self, obj):
        return obj.composer.id

    class Meta:
        model = Composition
        fields = ['id', 'name', 'first_name', 'last_name', 'composer_id', 'recording_link']


class CompositionSerializer(serializers.ModelSerializer):
    composer_name = serializers.SerializerMethodField()
    publisher_name = serializers.SerializerMethodField()

    def get_composer_name(self, obj):
        firstName = obj.composer.firstName
        lastName = obj.composer.lastName
        return firstName + ' ' + lastName

    def get_publisher_name(self, obj):
        return obj.publisher.name

    class Meta:
        model = Composition
        fields = '__all__'


class FeaturedComposerSerializer(serializers.ModelSerializer):
    nationality_detail = serializers.SerializerMethodField()

    def get_nationality_detail(self, obj):
    #    return obj.nationality.name
        return ComposerNationality.objects.filter(composer=obj).aggregate(names=StringAgg('nationality__name', delimiter='/', ordering='id'))['names']

    class Meta:
        model = Composer
        fields = ['firstName', 'lastName', 'birth',
                  'death', 'nationality_detail', 'image']


class ComposersByLetterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Composer
        fields = ['id', 'firstName', 'lastName', 'image']


class SearchBarComposerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Composer
        fields = ['id', 'firstName', 'lastName', 'image']


class SearchBarCompositionSerializer(serializers.ModelSerializer):
    composer_name = serializers.SerializerMethodField()

    def get_composer_name(self, obj):
        firstName = obj.composer.firstName
        lastName = obj.composer.lastName
        return firstName + ' ' + lastName

    class Meta:
        model = Composition
        fields = ['id', 'name', 'composer_name']


class SearchBarPublisherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publisher
        fields = ['id', 'name']

class SearchBarBlogPostsSerializer(serializers.ModelSerializer):
    author_name = serializers.SerializerMethodField()
    
    def get_author_name(self, obj):
        return obj.author.username

    class Meta:
        model = BlogPost
        fields = ['id', 'author', 'content', 'date_posted',
                  'title', 'votes', 'author_name']


class CompositionsByComposerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Composition
        fields = ['id', 'name', 'composer']


class CompositionByLetterSerializer(serializers.ModelSerializer):

    first_name = serializers.SerializerMethodField()
    last_name = serializers.SerializerMethodField()
    composer_id = serializers.SerializerMethodField()

    def get_first_name(self, obj):
        return obj.composer.firstName

    def get_last_name(self, obj):
        return obj.composer.lastName

    def get_composer_id(self, obj):
        return obj.composer.id

    class Meta:
        model = Composition
        fields = ['id', 'name', 'first_name', 'last_name', 'composer_id']


class BlogPostsSerializer(serializers.ModelSerializer):
    author_name = serializers.SerializerMethodField()
    

    def get_author_name(self, obj):
        return obj.author.username
    

    class Meta:
        model = BlogPost
        fields = ['id', 'author', 'content', 'date_posted',
                  'title', 'votes', 'author_name']


class BlogPostCommentsSerializer(serializers.ModelSerializer):
    author_name = serializers.SerializerMethodField()

    def get_author_name(self, obj):
        return obj.author.username

    class Meta:
        model = BlogComment
        fields = ['id', 'author', 'content', 'date_posted', 'author_name', 'post']


class ForumPostsSerializer(serializers.ModelSerializer):
    author_name = serializers.SerializerMethodField()

    def get_author_name(self, obj):
        return obj.user.username

    class Meta:
        model = ForumPost
        fields = ['id', 'user', 'content', 'date_posted', 'author_name']


class ForumPostCommentsSerializer(serializers.ModelSerializer):
    author_name = serializers.SerializerMethodField()

    def get_author_name(self, obj):
        return obj.user.username

    class Meta:
        model = ForumComment
        fields = ['id', 'user', 'content', 'date_posted', 'author_name', 'post']
