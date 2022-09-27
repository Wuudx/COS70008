from django.contrib import admin
from .models import Composer, Composition, Instrument, Nationality, ComposerNationality, CompositionInstrument, Publisher

admin.site.register(Composer)
admin.site.register(Composition)
admin.site.register(Instrument)
admin.site.register(Nationality)
admin.site.register(ComposerNationality)
admin.site.register(CompositionInstrument)
admin.site.register(Publisher)


# Register your models here.
