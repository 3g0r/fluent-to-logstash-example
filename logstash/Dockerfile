FROM docker.elastic.co/logstash/logstash:5.4.0

USER root

RUN logstash-plugin uninstall logstash-codec-fluent && \
    logstash-plugin install --version 3.1.1 logstash-codec-fluent
