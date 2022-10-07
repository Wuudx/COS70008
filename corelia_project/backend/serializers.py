from rest_framework import serializers

from .models import Composer, Composition, Instrument, Nationality, ComposerNationality, CompositionInstrument, Publisher, BlogPost

class ComposerSerializer(serializers.ModelSerializer):
    nationality_detail = serializers.SerializerMethodField()

    def get_nationality_detail(self, obj):
        return obj.nationality.name

    class Meta:
        model = Composer
        fields = '__all__'

class CompositionSerializer(serializers.ModelSerializer):
    composer_name = serializers.SerializerMethodField()

    def get_composer_name(self, obj):
        firstName = obj.composer.firstName
        lastName = obj.composer.lastName
        return firstName + ' ' + lastName
    class Meta:
        model = Composition
        fields = '__all__'

class InstrumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instrument
        fields = '__all__'

class NationalitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Nationality
        fields = '__all__'

class ComposerNationalitySerializer(serializers.ModelSerializer):
    class Meta:
        model = ComposerNationality
        fields = '__all__'

class CompositionInstrumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompositionInstrument
        fields = '__all__'

class PublisherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publisher
        fields = '__all__'

class FeaturedComposerSerializer(serializers.ModelSerializer):
    nationality_detail = serializers.SerializerMethodField()

    def get_nationality_detail(self, obj):
        return obj.nationality.name

    class Meta:
        model = Composer
        fields = '__all__'

class BlogPostSerializer(serializers.ModelSerializer):
    user_detail = serializers.SerializerMethodField()

    def get_user_detail(self, obj):
        return obj.user.email
    
    class Meta:
        model = BlogPost
        fields = '__all__'

class BlogCommentSerializer(serializers.ModelSerializer):
    post_detail = serializers.SerializerMethodField()

    #def get_post_detail(self, obj):
    #    return obj.blogpost.id

    #def get_author_detail(self, obj):
    #    return obj.user.username

    def get_comment_detail(self, obj):
        return obj.user.username

    class Meta:
        model = BlogComment
        fields = '__all__'