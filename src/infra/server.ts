import { server } from "./app";
import { env } from "./env/variable";



server.listen({ port: env.PORT, host:"localhost" }, () => {
    console.log(`HTTP Server running on http://localhost:${env.PORT}`);
});
