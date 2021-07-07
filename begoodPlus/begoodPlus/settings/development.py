from .base import *


DEBUG=True
COMPRESS_ENABLED = False
INSTALLED_APPS.insert(0,'debug_toolbar')
INSTALLED_APPS.insert(0,'livereload')


MIDDLEWARE += [
    'debug_toolbar.middleware.DebugToolbarMiddleware',
    'livereload.middleware.LiveReloadScript',
]