const { Stack } = require("aws-cdk-lib")
const lambda = require("aws-cdk-lib/aws-lambda")

const LAMBDA_FUNCTIONS = [
  { name: "API1", handler: "api1_handler.main", allowedOrigins: ["*"]}
]

class LambdaAPIStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props)
    
    LAMBDA_FUNCTIONS.forEach(func => {
      const lambdaFunction = new lambda.Function(this, `${func.name}-`, {
        runtime: lambda.Runtime.NODEJS_14_X,
        code: lambda.Code.fromAsset("resources"),
        handler: func.handler,
      })
      lambdaFunction.addFunctionUrl({
        authType: "NONE",
        cors: {
          allowedOrigins: func.allowedOrigins || ["*"]
        }
      })
    })
  }
}

module.exports = { LambdaAPIStack }