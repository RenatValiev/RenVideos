from django import template

register = template.Library()


@register.inclusion_tag('main/tags/cards.html')
def cards(videos):
    return {"videos": videos}
