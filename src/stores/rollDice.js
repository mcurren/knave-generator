export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function rollDice(min = 1, max = 20, count = 1, sumRolls = false) {
  let results = [];
  for (let step = 0; step < count; step++) {
    results.push(randomNumber(min, max));
  }
  if (sumRolls) {
    const total = results.reduce((a, b) => a + b, 0);
    results = [total];
  }
  return results;
}
