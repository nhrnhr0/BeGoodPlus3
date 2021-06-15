from .base import *


DEBUG=True
COMPRESS_ENABLED = False

INSTALLED_APPS.insert(0,'livereload')

MIDDLEWARE += [
    'livereload.middleware.LiveReloadScript',
]