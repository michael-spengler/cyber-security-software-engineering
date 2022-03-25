import { opine } from "https://deno.land/x/opine@2.1.2/mod.ts";
import { MongoService } from "./mongo-persistence.ts";
import { PersistencInterface } from "./persistence-interface.ts";

export class Server {

    private offers = []

    private persistencService: PersistencInterface

    public constructor(persistencService?: PersistencInterface) {
        if (persistencService === undefined) {
            this.persistencService = new MongoService()
        } else {
            // this.persistencService = new whatever persistence service you like
        }

    }

    public startListening(port: number) {
        const app = opine();

        app.get("/insert", function (req, res) {
            this.persistencService.insert("whatever") // this would need some refactoring
            res.send("ok");
        });

        app.listen(
            port,
            () => console.log(`server has started on http://localhost:${port} 🚀`),
        );
    }
}



