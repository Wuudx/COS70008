from rest_framework import serializers

from .models import Composer, Composition, Instrument, Nationality, ComposerNationality, CompositionInstrument, Publisher


class AllComposersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Composer
        fields = ['id', 'firstName', 'lastName', 'image']


class ComposerSerializer(serializers.ModelSerializer):
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
        fields = ['id', 'name', 'first_name', 'last_name', 'composer_id']


class CompositionSerializer(serializers.ModelSerializer):
    composer_name = serializers.SerializerMethodField()

    def get_composer_name(self, obj):
        firstName = obj.composer.firstName
        lastName = obj.composer.lastName
        return firstName + ' ' + lastName

    class Meta:
        model = Composition
        fields = '__all__'


class FeaturedComposerSerializer(serializers.ModelSerializer):
    nationality_detail = serializers.SerializerMethodField()

    def get_nationality_detail(self, obj):
        return obj.nationality.name

    class Meta:
        model = Composer
        fields = ['firstName', 'lastName', 'birth',
                  'death', 'nationality_detail', 'image']


class ComposersByLetterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Composer
        fields = ['firstName', 'lastName', 'image']


class SearchBarComposerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Composer
        fields = ['id', 'firstName', 'lastName']


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
