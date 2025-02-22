const { app } = require('@azure/functions');

app.http('Calculator', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const firstNumber = Number.parseInt(request.query.get('firstNumber'));
        const secondNumber = Number.parseInt(request.query.get('secondNumber'));

        return { jsonBody : { Sum: firstNumber + secondNumber } };
    }
});
