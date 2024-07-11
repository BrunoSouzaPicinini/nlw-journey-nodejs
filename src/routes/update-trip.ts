import type { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from 'zod';
import { dayjs } from '../lib/dayjs';
import { prisma } from "../lib/prisma";
import { ClientError } from "../errors/client-error";

export async function updateTrip(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().put('/trips/:tripId', {
        schema: {
            params: z.object({
                tripId: z.string().uuid(),
            }),
            body: z.object({
                destination: z.string().min(4),
                starts_at: z.coerce.date(),
                ends_at: z.coerce.date(),
            })

        }
    }, async (request) => {
        const { tripId } = request.params;
        const { destination, starts_at, ends_at} = request.body;

        if (dayjs(starts_at).isAfter(ends_at)) {
            throw new ClientError('The start date must be before the end date');
        }

        if (dayjs(ends_at).isBefore(starts_at)) {
            throw new ClientError('The end date must be in the future');
        }

        const trip = await prisma.trip.findUnique({
            where: {
                id: tripId
            }
        });

        if (!trip) {
            throw new ClientError('Trip not found');
        }

        await prisma.trip.update({
            where: {
                id: tripId
            },
            data: {
                destination,
                starts_at,
                ends_at
            }
        });

        return { tripId: trip.id }
    })
}