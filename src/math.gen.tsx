/* TypeScript file generated from math.res by genType. */
/* eslint-disable import/first */


import {add as addNotChecked} from './math';

// In case of type error, check the type of 'add' in 'math.re' and './math'.
export const addTypeChecked: (_1:number, _2:number) => number = addNotChecked;

// Export 'add' early to allow circular import from the '.bs.js' file.
export const add: unknown = addTypeChecked as (_1:number, _2:number) => number;
