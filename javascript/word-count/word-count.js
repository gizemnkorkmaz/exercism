export const countWords = (sentence) => {
  const wordsArray = sentence.split(/[, ]+/);

  const counts = {};
  wordsArray.forEach((str) => {
    let word = str
      .toLowerCase()
      .trim()
      .match(/\b[\w']+\b/g);

    if (word) {
      counts[word] = (counts[word] || 0) + 1;
    }
  });

  return counts;
};
