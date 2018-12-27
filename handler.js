'use strict';

const headers = require('./headers/headers')
const calc = require('./components/convertTimeFunction')

const convertTime = async (event, context) => {

  const request = JSON.parse(event.body);
  if (typeof request.time !== "string") {
    console.error("Validation Failed");
    callback(new Error("Invalid request body data type."));
    return;
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      message: calc.convertTimeFunction(request.time)
    }),
  };

};

module.exports = {
  convertTime
}
