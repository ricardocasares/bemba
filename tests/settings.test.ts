import { Selector } from "testcafe";

const Html = Selector("html");
const Toggle = Selector("button");

fixture`Settings`.page`${process.env.TARGET_URL}/settings`;

test("Sets dark color mode", async (cafe) =>
  cafe
    .expect(Toggle.withText("Dark").exists)
    .ok()
    .click(Toggle.withText("Dark"))
    .expect(Html.getAttribute("data-theme"))
    .eql("dark"));

test("Sets light color mode", async (cafe) =>
  cafe
    .expect(Toggle.withText("Light").exists)
    .ok()
    .click(Toggle.withText("Light"))
    .expect(Html.getAttribute("data-theme"))
    .eql("light"));

test("Sets system color mode", async (cafe) =>
  cafe
    .expect(Toggle.withText("System").exists)
    .ok()
    .click(Toggle.withText("System"))
    .expect(Html.getAttribute("data-theme"))
    .eql("system"));
