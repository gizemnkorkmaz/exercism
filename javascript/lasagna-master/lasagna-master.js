/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(remainingTime) {
  if (remainingTime === 0) {
    return "Lasagna is done.";
  } else if (remainingTime > 0) {
    return "Not done, please wait.";
  } else {
    return "You forgot to set the timer.";
  }
}

export function preparationTime(layers, averageTime) {
  let totalPrepTime = 0;
  if (averageTime) {
    layers.forEach(() => (totalPrepTime += averageTime));
  } else {
    layers.forEach(() => (totalPrepTime += 2));
  }
  return totalPrepTime;
}

export function quantities(layers) {
  let quantitiesTotal = {
    noodles: 0,
    sauce: 0,
  };
  layers.forEach((layer) => {
    if (layer === "noodles") {
      quantitiesTotal["noodles"] += 50;
    }
    if (layer === "sauce") {
      quantitiesTotal["sauce"] += 0.2;
    }
  });
  return quantitiesTotal;
}

export function addSecretIngredient(friendsList, myList) {
  const secretIngredient = friendsList[friendsList.length - 1];
  myList.push(secretIngredient);
}

export function scaleRecipe(recipe, amount) {
  const modifiedRecipe = { ...recipe };
  for (let item in modifiedRecipe) {
    modifiedRecipe[item] = modifiedRecipe[item] * (amount / 2);
  }
  return modifiedRecipe;
}
