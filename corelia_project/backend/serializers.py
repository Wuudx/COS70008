from rest_framework import serializers
from .models import Composer, Composition, Instrument, Nationality, ComposerNationality, CompositionInstrument, Publisher

class ComposerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Composer
        fields = '__all__'

class CompositionSerializer(serializers.ModelSerializer):
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




