from django.contrib import admin
from .models import Channel, Category, Video, Comment


@admin.register(Channel)
class ChannelAdmin(admin.ModelAdmin):
    list_display = ("owner", "name")
    list_display_links = ("owner", "name")
    search_fields = ("name", "description")
    save_as = True
    save_on_top = True


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name",)
    list_display_links = ("name",)
    search_fields = ("name",)
    save_as = True
    save_on_top = True


@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ("name", "channel", "category")
    list_display_links = ("name", "channel", "category")
    search_fields = ("name", "descryption")
    save_as = False
    save_on_top = True


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ("user", "video")
    list_display_links = ("user", "video")
    search_fields = ("user", "video", "text")
    save_as = True
    save_on_top = True
