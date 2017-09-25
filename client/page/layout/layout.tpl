<!doctype html>
{% html framework="nicemoods_common:static/js/mod.js" %}
    {% head %}
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="">
        <meta name="author" content="">
        <title>{{ title }}</title>
        {% widget "nicemoods_common:widget/basecss/basecss.tpl"%}
    {% endhead %}

    {% body %}
        <div id="wrapper">
            <div id="middle" class="container">
                {% block content %}
                {% endblock %}
            </div>
        </div>
        {% block page_resource %}{% endblock %}
    {% endbody %}

{% endhtml %}
