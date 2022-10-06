from rest_framework import serializers

from .models import Composer, Composition, Instrument, Nationality, ComposerNationality, CompositionInstrument, Publisher


class AllComposersSerializer(serializers.ModelSerializer):
    composition_count = serializers.SerializerMethodField()

    def get_composition_count(self, obj):
        return Composition.objects.filter(composer=obj).count()

    class Meta:
        model = Composer
        fields = ['id', 'firstName', 'lastName', 'composition_count']


class ComposerSerializer(serializers.ModelSerializer):
    nationality_detail = serializers.SerializerMethodField()

    def get_nationality_detail(self, obj):
        return obj.nationality.name

    class Meta:
        model = Composer
        fields = '__all__'


class AllCompositionsSerializer(serializers.ModelSerializer):
    composer = serializers.SerializerMethodField()

    def get_composer(self, obj):
        return obj.composer.firstName + ' ' + obj.composer.lastName

    class Meta:
        model = Composition
        fields = ['id', 'name', 'composer']


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
