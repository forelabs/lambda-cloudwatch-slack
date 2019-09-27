# Cloud Watcher

The new cloud watcher will observe our infrastructure and notify us
within the slack channel #cluster-health about different types of
problems within our cluster (e.g. too many sqs messages, restarted, stucked or evicted pods).

## Cloudwatch Alarms

- Using a lambda function to trigger slack notifications for cloudwatch alarms on
  - sqs default queue :heavy_check_mark:
  - sqs upload queue :heavy_check_mark:
  - sqs branching queue :heavy_check_mark:
  - sqs autopilot queue :heavy_check_mark:
  - sqs indexing-logs queue :heavy_check_mark:
  - sqs webhooks queue :heavy_check_mark:
  - sqs translation-events queue :heavy_check_mark:
  - rds storage usage :heavy_check_mark:
  - cache memory usage :heavy_check_mark:

## Container Insights

Idea is to observe status of our containers and notify us when they do a restart,
change status to evicted or just get stucked (like our workers sometimes do).

- setting up amazon-cloudwatch agent within cluster
- use cloudwatch alarms on
  - pod restarts
    - default :heavy_check_mark:
    - upload :heavy_check_mark:
    - branching :heavy_check_mark:
    - autopilot :heavy_check_mark:
    - indexing-logs :heavy_check_mark:
    - webhooks :heavy_check_mark:
    - translation-events :heavy_check_mark:

## App Endpoint Response Time Observing

Idea is to observe the average response time from an endpoint of the app within the last X minutes
and compare it to the average response time of the previous X minutes block. Idealy we do this after
a new release was deployed.
