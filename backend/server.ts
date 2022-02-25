import { opine } from "https://deno.land/x/opine@2.1.2/mod.ts";

export class Server {

    private offers = []

    public getOffers() {
        return this.offers
    }

    public placeOffer() {
        return "success"
    }

}
// const app = opine();

// app.get("/placeOffer", function (req, res) {
//     res.send("placeOffer needs to be implemented");
// });

// const port = Number(Deno.args[0])
// app.listen(
//     port,
//     () => console.log(`server has started on http://localhost:${port} 🚀`),
// );


