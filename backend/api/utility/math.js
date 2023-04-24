/**
 * Create a random number
 * @param {*} min
 * @param {*} max
 * @returns
 */

export const getRandom = () => {
  return Math.floor(Math.random() * (100000 - 999999)) + 999999;
};
