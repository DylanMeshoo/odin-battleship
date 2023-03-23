let Ship = (length, hitCount, sunken) => {
    const hit = () => {
        hitCount += 1;
        isSunk();
        return hitCount;
    }
    const isSunk = () => {
        if (hitCount === length) {
          sunken = true;
        }
        return sunken;
      };
    return { length, get hitCount() {return hitCount}, sunken, hit, isSunk, }
}

let ship = Ship(5, 0, false);
ship.hit();
console.log(ship.hitCount)