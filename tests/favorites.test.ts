import { Selector } from "testcafe";

const Card = Selector("[data-test-card]");
const CardButton = Selector("[data-test-card-fave-button]");

fixture`Favorites`.page(process.env.TARGET_URL).beforeEach(async (t) => {
  t.ctx.id = await CardButton.getAttribute("data-test-card-fave-button");
  return t.click(CardButton).navigateTo("/favorites");
});

test("Adds a station to favorites", async (t) =>
  t
    .expect(Card.withAttribute("data-test-card", t.ctx.id).exists)
    .eql(true)
    .expect(Card.count)
    .eql(1));

test("Removes a station from favorites", async (t) =>
  t
    .click(CardButton.withAttribute("data-test-card-fave-button", t.ctx.id))
    .expect(CardButton.exists)
    .eql(false)
    .expect(CardButton.count)
    .eql(0));
