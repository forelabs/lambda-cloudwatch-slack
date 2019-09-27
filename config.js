var config =  {
  kmsEncryptedHookUrl: process.env.KMS_ENCRYPTED_HOOK_URL, // encrypted slack webhook url
  unencryptedHookUrl: process.env.UNENCRYPTED_HOOK_URL,    // unencrypted slack webhook url

  services: {
    elasticbeanstalk: {
      // text in the sns message or topicname to match on to process this service type
      match_text: "ElasticBeanstalkNotifications",
      enabled: true
    },
    cloudwatch: {
      enabled: true
    },
    codepipeline: {
      // text in the sns message or topicname to match on to process this service type
      match_text: "CodePipelineNotifications",
      enabled: true
    },
    codedeploy: {
      // text in the sns message or topicname to match on to process this service type
      match_text: "CodeDeploy",
      enabled: true
    },
    elasticache: {
      // text in the sns message or topicname to match on to process this service type
      match_text: "ElastiCache",
      enabled: true
    },
    autoscaling: {
      // text in the sns message or topicname to match on to process this service type
      match_text: "AutoScaling",
      enabled: true
    },
    catchall: {
      enabled: true
    }
  }
}

if(process.env.hasOwnProperty("DISABLE_ELASTICBEANSTALK")) {
  config.services.elasticbeanstalk.enabled = false;
}

if(process.env.hasOwnProperty("DISABLE_CLOUDWATCH")) {
  config.services.cloudwatch.enabled = false;
}

if(process.env.hasOwnProperty("DISABLE_CODEPIPELINE")) {
  config.services.codepipeline.enabled = false;
}

if(process.env.hasOwnProperty("DISABLE_CODEDEPLOY")) {
  config.services.codedeploy.enabled = false;
}

if(process.env.hasOwnProperty("DISABLE_ELASTICACHE")) {
  config.services.elasticache.enabled = false;
}

if(process.env.hasOwnProperty("DISABLE_AUTOSCALING")) {
  config.services.autoscaling.enabled = false;
}

if(process.env.hasOwnProperty("DISABLE_CATCHALL")) {
  config.services.catchall.enabled = false;
}

module.exports = config
