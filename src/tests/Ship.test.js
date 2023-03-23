const Ship = require('../Ship');
const submarine = Ship(5, 0, false)

test('Ship gets hit, hitCount increases', () => {
    submarine.hit();
    console.log(submarine.hitCount);
    expect(submarine.hitCount).toBe(1);
});

test('Ship gets sunk, sunken = true', () => {
    for (i = 0; i < 6; i++) {
        submarine.hit();
        submarine.isSunk();
    }
    console.log(submarine.hitCount);
    expect(submarine.sunken).toBe(true);
}) 