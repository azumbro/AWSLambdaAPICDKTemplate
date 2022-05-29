# AWS Lambda API CDK Template

Template for creating AWS Lambda APIs using CDK. 

## Usage
- Install node modules by running `npm install`.
- In `lib/lambda_api-stack.js`, add the target AWS region and account ID to the `ACCOUNT_SETTINGS` object.
- In `lib/lambda_api-stack.js`, add an entry to `LAMBDA_FUNCTIONS` for each lambda function/API to create as part of the stack.
    - The `name` field specified the name of the lambda/API.
    - The `handler` field points to the handler file and function that will serve as the entry point to the lambda/API; these handles should be located in JS files within the `resources` directory. For example, a value of `api1_handler.main` would look for an exported `main` function in the `resources/api1_handler.js` file.
    - The `allowedOrigins` field specifies a list of domain origins that can call the lambda/API. An entry of "*" allows for all domains to call the lambda/API.
- Write your lambda/API business logic in the handler functions. A basic example has been provided in `api1_handler.main`.
- When ready to deploy your lambda/API, run `npm run cdk deploy`. This will create the relevant CFN stack and lambda functions in your AWS account.
- Get the URL(s) for calling your lambda/API(s). These can be found in the AWS console by navigating the the lambda function list, selection a lambda function, and looking for the value under "Function URL" in the overview panel.