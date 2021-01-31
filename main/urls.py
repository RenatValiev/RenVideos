from django.urls import path
from . import views

urlpatterns = [
    path('video/<str:name>', views.VideoView.as_view(), name="video"),
    path('channel/<str:name>', views.ChannelView.as_view(), name='channel'),
    path('comment', views.AddCommentView.as_view(), name='comment'),
    path('profile/', views.ProfileView.as_view(), name='profile'),
    path('upload-video', views.UploadVideoView.as_view(), name='upload-video'),
    path('', views.IndexView.as_view(), name="index")
]