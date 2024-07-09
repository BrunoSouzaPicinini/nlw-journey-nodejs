import fastify from 'fastify';
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';
import { confirmTrip } from './routes/confirm-trip';
import { createTrip } from './routes/create-trip';
import cors from '@fastify/cors';

const app = fastify();

app.register(cors, {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createTrip);
app.register(confirmTrip);

app.listen({ port: 3333 }).then(() => {
    console.log('Server is running on port 3333');
});