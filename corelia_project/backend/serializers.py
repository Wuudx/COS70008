from rest_framework import serializers

from .models import Composer, Composition, Instrument, Nationality, ComposerNationality, CompositionInstrument, Publisher, BlogPost, BlogComment, ForumPost, ForumComment, ContactUs

from django.contrib.postgres.aggregates import StringAgg
from django.db.models.functions import Concat
from django.db.models import CharField, Value

class AllNationalitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nationality
        fields = ['id', 'name']

class AllComposersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Composer
        fields = ['id', 'firstName', 'lastName', 'image']


class ComposerSerializer(serializers.ModelSerializer):
    nationality_name = serializers.SerializerMethodField()
    #nationality_names = serializers.SerializerMethodField()

    def get_nationality_name (self, obj):
        return obj.nationality.name
    #def get_nationality_names (self, obj):
        #return ComposerNationality.objects.filter(composer=obj).aggregate(names=StringAgg('nationality__name', delimiter='/', ordering='id'))['names']
        
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

class AllPublishersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publisher
        fields = ['id', 'name']

class AllInstrumentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instrument
        fields = ['id', 'name']

class FeaturedComposerSerializer(serializers.ModelSerializer):
    nationality_detail = serializers.SerializerMethodField()

    def get_nationality_name (self, obj):
        return obj.nationality.name

    class Meta:
        model = Composer
        fields = ['id','firstName', 'lastName', 'birth',
                  'death', 'nationality_name', 'image']


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
    user_image = serializers.SerializerMethodField()

    def get_user_image(self, obj):
        return obj.author.image.url
    

    def get_author_name(self, obj):
        return obj.author.username
    

    class Meta:
        model = BlogPost
        fields = ['id', 'author', 'content', 'date_posted',
                  'title', 'votes', 'author_name', 'user_image']


class BlogPostCommentsSerializer(serializers.ModelSerializer):
    author_name = serializers.SerializerMethodField()

    def get_author_name(self, obj):
        return obj.author.username

    class Meta:
        model = BlogComment
        fields = ['id', 'author', 'content', 'date_posted', 'author_name', 'post']


class ForumPostsSerializer(serializers.ModelSerializer):
    author_name = serializers.SerializerMethodField()
    num_comments = serializers.SerializerMethodField()
    user_image = serializers.SerializerMethodField()

    def get_author_name(self, obj):
        return obj.user.username

    def get_num_comments(self, obj):
        return ForumComment.objects.filter(post=obj).count()
    
    def get_user_image(self, obj):
        return obj.user.image.url

    class Meta:
        model = ForumPost
        fields = ['id', 'user', 'content', 'date_posted', 'author_name', 'image', 'num_comments', 'user_image']


class ForumPostCommentsSerializer(serializers.ModelSerializer):
    author_name = serializers.SerializerMethodField()
    user_image = serializers.SerializerMethodField()

    def get_author_name(self, obj):
        return obj.user.username
    
    def get_user_image(self, obj):
        return obj.user.image.url

    class Meta:
        model = ForumComment
        fields = ['id', 'user', 'content', 'date_posted', 'author_name', 'post', 'user_image']

class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = ['id', 'name', 'email', 'subject', 'message']

class CreateNationalitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Nationality
        fields = ['name']

class CreateComposerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Composer
        fields = ['firstName', 'lastName', 'birth', 'death', 'biography', 'bio_source', 'featured', 'composer_website', 'image']

    def create(self, validated_data):
        nationality_names = self.initial_data['nationality'].split('/') # I'm not sure this is the best way to get this, but it's the only way that I could figure out to get what I need

        dummy_nationality = Nationality.objects.get(id = -1) # TODO: REMOVE THIS ONCE WE DUMP THE NATIONALITY COLUMN FROM DATABSE

        composer_instance = Composer.objects.create(nationality = dummy_nationality, **validated_data)

        for nationality_name in nationality_names:
            nationality_instance = Nationality.objects.get_or_create(name = nationality_name)[0]

            ComposerNationality.objects.create(composer = composer_instance, nationality = nationality_instance)

        return composer_instance

class CreateInstrumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instrument
        fields = ['name']

class CreatePublisherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publisher
        fields = ['name']

class CreateCompositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Composition
        #fields = ['name', 'composer', 'year', 'duration', 'publisher', 'recording_link', 'score_link']
        fields = ['name', 'year', 'duration', 'recording_link', 'score_link']

    def create(self, validated_data):
        composer_name = self.initial_data['composer'].split(' ')
        instrument_names = self.initial_data['instrument'].split(', ') # I'm not sure this is the best way to get this, but it's the only way that I could figure out to get what I need
        publisher_name = self.initial_data['publisher']

        composer_instance = Composer.objects.get(firstName = composer_name[0], lastName = composer_name[1])
        publisher_instance = Publisher.objects.get_or_create(name = publisher_name)[0]
        composition_instance = Composition.objects.create(composer = composer_instance, publisher = publisher_instance, **validated_data)

        for instrument_name in instrument_names:
            instrument = instrument_name.split(' ', 1)

            if instrument[0].isdigit():
                instrument = [int(instrument[0]), instrument[1]]

                if instrument[1].endswith('s') and not instrument[1].endswith('ss'):
                    instrument[1] = instrument[1][:-1]
            else:
                instrument = [1, instrument_name]

            instrument_instance = Instrument.objects.get_or_create(name = instrument[1])[0]
        
            CompositionInstrument.objects.create(composition = composition_instance, instrument = instrument_instance, quantity = instrument[0])

        return composition_instance
