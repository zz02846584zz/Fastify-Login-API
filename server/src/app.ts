import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import fjwt from "@fastify/jwt";
import userRoutes from "./modules/user/user.route";
import { userSchemas } from "./modules/user/user.schema";

export const server = Fastify();

declare module "fastify" {
  export interface FastifyInstance {
    auth: any;
  }
}

server.register(fjwt, {
  secret: "sfLIOPIOPs76g5GHJFGHJghsgs5fFSSDF653da",
});

server.decorate(
  "auth",
  async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      await request.jwtVerify();
    } catch (e) {
      return reply.send(e);
    }
  }
);

server.get("/healthcheck", async function (request, response) {
  return { status: "OK" };
});

async function main() {
  for (const schema of userSchemas) {
    server.addSchema(schema);
  }
  server.register(userRoutes, { prefix: "api/users" });

  try {
    await server.listen({ port: 3000 });
    console.log("Server ready at http://localhost:3000");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
