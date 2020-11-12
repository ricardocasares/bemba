import { Selector } from "testcafe";

const Html = Selector("html");
const Link = Selector("li");
const Title = Selector("h3");
const Toggle = Selector("button");

fixture`Settings`.page`${process.env.TARGET_URL}/settings`;

[
  ["Dark", "dark"],
  ["Light", "light"],
  ["System", "system"],
].forEach(([label, mode]) =>
  test(`Sets ${mode} color mode`, async (cafe) =>
    cafe
      .expect(Toggle.withText(label).exists)
      .ok()
      .click(Toggle.withText(label))
      .expect(Html.getAttribute("data-theme"))
      .eql(mode))
);

[
  ["English", "Settings"],
  ["Español", "Configuración"],
  ["Polski", "Ustawienia"],
  ["Française", "Réglages"],
  ["Русский", "Настройки"],
].forEach(([lang, label]) =>
  test(`Sets application language to '${lang}'`, async (cafe) =>
    cafe
      .expect(Link.withText(lang).exists)
      .ok()
      .click(Link.withText(lang))
      .expect(Title.withText(label).exists)
      .ok())
);
