#!/usr/bin/env node

const cdk = require("aws-cdk-lib");
const { LambdaAPIStack, ACCOUNT_SETTINGS } = require("../lib/lambda_api-stack");

const app = new cdk.App();
new LambdaAPIStack(app, "LambdaAPIStack", { env: ACCOUNT_SETTINGS })
