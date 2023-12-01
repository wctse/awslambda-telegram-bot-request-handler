# awslambda-telegram-bot-request-handler

This is a simple AWS Lambda function that handles requests from a Telegram bot.

As Telegram bots require acknowledgement of requests within a certain time frame, this function is intended to be used as a proxy between the Telegram bot and the actual bot logic.

The acknowledgement prevents Telegram from resending the request, which would otherwise happen if the bot logic takes too long to process.