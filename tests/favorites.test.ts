import { Selector } from "testcafe";

fixture`Favorites`.page`http://localhost:3000`;

test("Adds a station to favorites", async (t) => {
  const button = Selector("[data-test-card-fave-button]").nth(1);
  const id = await button.getAttribute("data-test-card-fave-button");
  const faved = Selector(`[data-test-card="${id}"]`);

  return t
    .click(button)
    .navigateTo("/favorites")
    .expect(faved.exists)
    .eql(true);
});
