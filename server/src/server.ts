import Fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";

import { testRoutes } from "./routes/test";

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  // Em produção isso precisa estar em uma variável de ambiente.

  await fastify.register(jwt, { secret: "ywdf876t258o37yr3sply8n" });

  await fastify.register(testRoutes);

  // host somente em ambiente de desenvolvimento

  await fastify.listen({ port: 3333 });
}

bootstrap();
