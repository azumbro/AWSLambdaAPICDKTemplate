const router = {
  "/": rootHandler
}

exports.main = async function(event, context) {
  const method = event.requestContext.http.method
  const path = event.rawPath
  const queryStringParameters = event.queryStringParameters
  console.log(`Received lambda invocation [method: ${method}, path: ${path}, queryStringParameters: ${JSON.stringify(queryStringParameters)}]`)

  let result = {
    statusCode: 404
  }

  const handler = router[path]
  if(handler) {
    result = await handler(method, path, queryStringParameters)
  } 

  if(!result.headers) {
    result.headers = {}
  }
  return result
}

async function rootHandler(method, path) {
  return {
    statusCode: 200,
    body: `Returning from '${path}'!`
  }
}