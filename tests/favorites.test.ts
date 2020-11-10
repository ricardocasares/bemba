import { Selector } from "testcafe";

fixture`Favorites`.page(process.env.TARGET_URL).beforeEach(async (t) => {
  const button = Selector("[data-test-card-fave-button]");
  const id = await button.getAttribute("data-test-card-fave-button");

  t.ctx.id = id;

  return t.click(button).navigateTo("/favorites");
});

test("Adds a station to favorites", async (t) => {
  const faved = Selector(`[data-test-card="${t.ctx.id}"]`);

  return t
    .expect(faved.exists)
    .eql(true)
    .expect(faved.count)
    .eql(1);
});

test("Removes a station from favorites", async (t) => {
  const button = Selector(`[data-test-card-fave-button="${t.ctx.id}"]`);

  return t
    .click(button)
    .expect(button.exists)
    .eql(false)
    .expect(button.count)
    .eql(0);
});
