import cors from '@fastify/cors';
import fastify from 'fastify';
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';
import { confirmParticipant } from './routes/confirm-participant';
import { confirmTrip } from './routes/confirm-trip';
import { createActivities } from './routes/create-activitie';
import { createTrip } from './routes/create-trip';
import { getActivities } from './routes/get-activities';
import { createLink } from './routes/create-link';
import { getLinks } from './routes/get-links';
import { getParticipants } from './routes/get-participants';
import { createInvite } from './routes/create-invite';
import { updateTrip } from './routes/update-trip';
import { getTripDetails } from './routes/get-trip-details';
import { getParticipant } from './routes/get-participant';

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
app.register(confirmParticipant);
app.register(createActivities);
app.register(getActivities);
app.register(createLink);
app.register(getLinks);
app.register(getParticipants);
app.register(createInvite);
app.register(updateTrip);
app.register(getTripDetails);
app.register(getParticipant);

app.listen({ port: 3333 }).then(() => {
    console.log('Server is running on port 3333');
});