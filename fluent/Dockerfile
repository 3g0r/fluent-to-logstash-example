FROM fluent/fluentd:v0.14.15

USER root

RUN apk add --update --virtual .build-deps \
    sudo build-base ruby-dev \
    # cutomize following instruction as you wish

    # for fluentd >= 0.14.0
    && sudo -u fluent gem install fluent-plugin-concat -v 2.1.0 \
    && sudo -u fluent gem install fluent-plugin-forest -v 0.3.3 \
    && sudo -u fluent gem install fluent-plugin-gelf-hs -v 1.0.2 \

    && sudo -u fluent gem sources --clear-all \
    && apk del .build-deps \
    && rm -rf /var/cache/apk/* \
        /home/fluent/.gem/ruby/2.3.0/cache/*.gem
