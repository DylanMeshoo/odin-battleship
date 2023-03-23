const Ship = require('../Ship');
const submarine = Ship(5, 0, false)

test('Ship gets hit, hitCount increases', () => {
    submarine.hit();
    console.log(submarine.hitCount);
    expect(submarine.hitCount).toBe(1)