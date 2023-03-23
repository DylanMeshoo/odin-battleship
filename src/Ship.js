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
module.exports = Ship;