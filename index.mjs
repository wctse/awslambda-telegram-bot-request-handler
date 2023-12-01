import AWS from 'aws-sdk';

const lambda = new AWS.Lambda({ apiVersion: '2015-03-31' });
const childFunctionName = process.env.CHILDFUNCTIONNAME;

export const handler = async (event) => {
    console.log("Event received: ", event);

    // Check if the event has a body. If not return an error
    if (!event.body) {
        console.log("Event body missing");
        return {
            statusCode: 400,
            body: JSON.stringify('Event body is missing.'),
        };
    }

    // Call another lambda function and pass on the event
    const params = {
        FunctionName: childFunctionName,
        InvocationType: 'Event',
        Payload: JSON.stringify(event),
    };

    console.log("Invoking lambda: ", childFunctionName);
    await lambda.invoke(params).promise();
  
    const response = {
      statusCode: 200,
      body: JSON.stringify('Request received!'),
    };
    
    return response;
  };
  