from rest_framework import serializers
from .models import Composer, Composition, Instrument, Nationality, ComposerNationality, CompositionInstrument, Publisher

class ComposerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Composer
        fields = '__all__'