import { Selector } from "testcafe";

const Card = Selector("[data-test-card]");
const Input = Selector("input");

fixture`Search`.page`${process.env.TARGET_URL}/search`;

test("Requires 3 chars to perform search", async (cafe) =>
  cafe
    .expect(Input.exists)
    .ok()
    .typeText(Input, "un")
    .expect(Card.exists)
    .notOk());

test("Performs a search for keyword 'Tango'", async (cafe) =>
  cafe
    .expect(Input.exists)
    .ok()
    .typeText(Input, "Tango")
    .expect(Card.exists)
    .ok()
    .expect(Card.withText("Tangoparabailar").exists)
    .ok());
