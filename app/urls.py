from django.urls import path
from app import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('',views.index, name='index'),
    path('account/',views.form,name='form'), #login
    path('logout/', views.user_logout,name='logout'), #logout
    path('contact/',views.feedback, name='contact'),
    path('feedback/', views.feedback, name='feedback'),
    #dashboard
    path('books/', views.books, name='books'),
    path('syllabus/',views.syllabus, name='syllabus'),
    path('previousYear/',views.previousYear,name='previousYear'),
    path('resource/',views.resource,name='resource'),
    path('resource/placement/',views.placement, name='placement'),
    path('resource/placement/site/', views.placementSite, name='intersite'),
    path('resource/placement/youtube/', views.placementYT, name='interyt'),
    path('resource/academic', views.academic, name='academic'),
    path('resource/academic/site/', views.academicSite, name='academicSites'),
    path('resource/academic/youtube', views.academicYT, name='academicYT')
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
