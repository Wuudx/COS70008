from django.contrib import admin
from .models import Composer, Composition, Instrument, Nationality, ComposerNationality, CompositionInstrument, Publisher, BlogPost, BlogComment, ForumPost, ForumComment, User

admin.site.register(Composer)
admin.site.register(Composition)
admin.site.register(Instrument)
admin.site.register(Nationality)
admin.site.register(ComposerNationality)
admin.site.register(CompositionInstrument)
admin.site.register(Publisher)
admin.site.register(BlogPost)
admin.site.register(BlogComment)
admin.site.register(ForumPost)
admin.site.register(ForumComment)
admin.site.register(User)



# Register your models here.
