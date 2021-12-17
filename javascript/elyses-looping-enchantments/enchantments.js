// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let totalCards = 0;
  stack.forEach((cardItem) => {
    if (cardItem === card) {
      totalCards++;
    }
  });
  return totalCards;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let totalEvenCards = 0;
  let totalOddCards = 0;
  for (const card of stack) {
    if (card % 2 === 0) {
      totalEvenCards++;
    } else {
      totalOddCards++;
    }
  }
  if (type) return totalEvenCards;
  if (!type) return totalOddCards;
}
