export const cost = (books) => {};

const bookPrice = 800;
const totalBookCount = books.length;

let basket = [...books];
let uniqueBooks = [...new Set(basket)];
let uniqueBookCount = uniqueBooks.length;
let discount = 0;
let noDiscountCost = totalBookCount * bookPrice;
let loopCount = Math.ceil(books.length / uniqueBookCount);

const calculateDiscount = (discountAmount) =>
  (bookPrice * uniqueBookCount * discountAmount) / 100;

while (loopCount > 0) {
  basket = basket.filter((val) => !uniqueBooks.includes(val));
  loopCount--;
  if (uniqueBookCount === 5) {
    discount += calculateDiscount(25);
  } else if (uniqueBookCount === 4) {
    discount += calculateDiscount(20);
  } else if (uniqueBookCount === 3) {
    discount += calculateDiscount(10);
  } else if (uniqueBookCount === 2) {
    discount += calculateDiscount(5);
  }
}

return noDiscountCost - discount;
