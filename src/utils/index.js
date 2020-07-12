/**
 * @description Convert array to object
 * @param {array} array
 * @param {string} key
 * @returns {object} Object from array based on the key
 */
export const convertArrayToObject = (array, key = 'id') => {
   return array.reduce((accum, e) => {
      return {
         ...accum,
         [e[key]]: {...e}
      }
   }, {})
};

/**
 * @description Convert object to array
 * @param {object} object
 * @returns {object} Array from the object
 */
export const convertObjectToArray = (object = {}) => {
   return Object.keys(object).map((key) => object[key]);
};
