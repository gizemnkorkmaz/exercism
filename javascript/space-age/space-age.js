export const age = (planet, seconds) => {
  const calculateAge = (totalSeconds, orbitalPeriod) => {
    return Math.abs((totalSeconds / 31555600 / orbitalPeriod).toFixed(2));
  };
  switch (planet) {
    case "mercury":
      return calculateAge(seconds, 0.2408467);
    case "venus":
      return calculateAge(seconds, 0.61519726);
    case "earth":
      return calculateAge(seconds, 1);
    case "mars":
      return calculateAge(seconds, 1.8808158);
    case "jupiter":
      return calculateAge(seconds, 11.862615);
    case "saturn":
      return calculateAge(seconds, 29.447498);
    case "uranus":
      return calculateAge(seconds, 84.016846);
    case "neptune":
      return calculateAge(seconds, 164.79132);
  }
};
