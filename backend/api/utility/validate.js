/**
 * Email validate
 * @param {*} email
 * @returns  true/false
 */

export const isEmail = (email) => {
  return /^[^\.-/][a-z0-9-_\.]{1,}@[a-z0-9]{1,}\.[a-z\.]{2,}$/.test(email);
};

/**
 * Phone validate
 * @param {*} phone
 * @returns  true/false
 */
export const isPhone = (phone) => {
  return /^(01|8801|\+8801)[0-9]{9}$/.test(phone);
};



/**
 * Check number
 * @param {*} number
 * @returns  true/false
 */
export const isNumber = (number) => {
  return /^[0-9\+]{9,}$/.test(number);
};

/**
 * Check string
 * @param {*} data
 * @returns  true/false
 */
export const isString = (data) => {
  return /^[a-z@\.]{1,}$/.test(data);
};
