import { getText } from './display';
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
export const isValidLastCharacter = (aditional = []) => {
  const currText = getText();
  const newN = [...numbers, ...aditional];
  return newN.includes(currText[currText.length - 1]);
};
