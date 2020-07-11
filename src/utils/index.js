export const convertArrayToObject = (array, key = 'id') => {
   return array.reduce((accum, e) => {
      return {
         ...accum,
         [e[key]]: {...e}
      }
   }, {})
};

export const convertObjectToArray = (object = {}) => {
   return Object.keys(object).map((key) => object[key]);
};
