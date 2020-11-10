import { Selector } from "testcafe";

fixture`Home`.page`http://localhost:3000`;

test("Lists stations", async (t) => {
  const card = Selector("[data-test-card]").nth(1);

  return t.expect(card.exists).eql(true);
});
