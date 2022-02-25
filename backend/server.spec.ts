import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { Server } from "./server.ts"

Deno.test("should place Offer", async () => {

    const classUnderTest = new Server()
    classUnderTest.placeOffer()

    assertEquals(classUnderTest.getOffers().length, 1)

})