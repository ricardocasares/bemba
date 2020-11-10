import { Selector } from "testcafe";

const Card = Selector("[data-test-card]");

fixture`Home`.page(process.env.TARGET_URL);

test("Lists stations", async (cafe) =>
  cafe
    .expect(Card.exists)
    .eql(true)
    .expect(Card.count)
    .eql(20));
