import { opine } from "https://deno.land/x/opine@2.1.2/mod.ts";

export class Server {

    private offers = []

    public getOffers() {
        return this.offers
    }

    public placeOffer() {
        this.placeOffer()
    }

    public startListening(port: number) {
        const app = opine();

        app.get("/placeOffer", function (req, res) {
            res.send("placeOffer needs to be implemented");
        });

        app.listen(
            port,
            () => console.log(`server has started on http://localhost:${port} 🚀`),
        );
    }
}



