import { Selector } from "testcafe";

fixture`Home`.page(process.env.TARGET_URL);

test("Lists stations", async (t) => {
  const card = Selector("[data-test-card]").nth(1);

  return t.expect(card.exists).eql(true);
});
