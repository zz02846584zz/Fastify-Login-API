import { FastifyInstance } from "fastify";
import ShortUniqueId from "short-unique-id";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function testRoutes(fastify: FastifyInstance) {
  fastify.get("/", async () => {
    return { hello: "world" };
  });
}
