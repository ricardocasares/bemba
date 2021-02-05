import { Selector } from 'testcafe'

const Card = Selector('[data-test-card]')

fixture`Home`.page(process.env.TARGET_URL)

test('Lists stations', async (cafe) =>
  await cafe
    .expect(Card.exists)
    .ok()
    .expect(Card.count)
    .eql(20))
