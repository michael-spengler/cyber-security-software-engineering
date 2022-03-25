import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { PersistenceDouble } from "./persistence-double"
import { PersistencInterface } from "./persistence-interface"
import { Server } from "./server.ts"

Deno.test("should insert somethin to db", async () => {

    const persistencService: PersistencInterface = new PersistenceDouble()
    const classUnderTest = new Server()
    classUnderTest.placeOffer()

    assertEquals(classUnderTest.getOffers().length, 1)

})