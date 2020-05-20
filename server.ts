// Oak is a middleware framework for Deno's http server
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const port = 5000;

const app = new Application();

// Enable router
const router = new Router();
app.use(router.routes());
// Allow methods -- can be restricted
app.use(router.allowedMethods());

router.get("/api/v1/products", ({ response }: { response: any }) => {
  response.body = "Hello World";
});

console.log(`Server running on port ${port}`);

await app.listen({ port });
