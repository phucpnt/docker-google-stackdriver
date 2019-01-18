## Purpose
Setup a container that would receiving the log from other docker container and send to google stackdriver

## Usage

* Run the docker

```docker run -p 5514:514 -v /Users/phucpnt/projects/google-stackdriver-log/application_default_credentials.json:/etc/google/auth/application_default_credentials.json -v /Users/phucpnt/projects/google-stackdriver-log/google-fluentd.conf:/etc/google-fluentd/google-fluentd.conf -e "GOOGLE_APPLICATION_CREDENTIALS=/etc/google/auth/application_default_credentials.json" --name=google-log phucpnt/google-stackdriver-log```
* Remember to assign the following environment for location of the stackdriver log:
  * GCP_PROJECT_ID: your project id in GCP
  * GCP_VM_ID: you can name your VM name (any name)
  * GCP_ZONE_ID: use the zone id of GCP ex: northamerica etc...
  * Why you need that? -> https://github.com/GoogleCloudPlatform/fluent-plugin-google-cloud/issues/156

* Set the other docker instance to use `fluentd` driver for log.
Eg. ```docker run --log-driver=fluentd --log-opt fluentd-address=127.0.0.1:5514 phucpnt/log-test```

