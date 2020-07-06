#!/bin/bash
export JAVA_HOME=/opt/jdk1.8.0_251
nohup $JAVA_HOME/bin/java -jar /home/forrester/apim-demo/target/org.wso2.carbon.apimgt.demo-1.0-SNAPSHOT.jar > backend.log 2>&1 &