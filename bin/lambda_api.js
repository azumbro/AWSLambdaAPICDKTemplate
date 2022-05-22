#!/usr/bin/env node

const cdk = require("aws-cdk-lib");
const { LambdaAPIStack } = require("../lib/lambda_api-stack");

const app = new cdk.App();
new LambdaAPIStack(app, "LambdaAPIStack", {})
