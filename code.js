let Ship = (length, hitCount, sunken) => {
    const hit = () => {
        hitCount += 1;
        isSunk();
        return hitCount;
    }
    const isSunk = () => {
        if (hitCount >= length) {
          sunken = true;
        }
        return sunken;
      };
    return { length, get hitCount() {return hitCount}, get sunken() {return sunken}, hit, isSunk, }
}

let ship = Ship(5, 0, false);
ship.hit();
ship.hit();
ship.hit();
ship.hit();
ship.hit();
ship.isSunk();
console.log(ship.sunken);