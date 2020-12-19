import { bindToDisplay, getText, setError } from './display';
// import { isValidLastCharacter } from './utils';
const elementNumber9 = document.getElementById('number-9');
const elementNumber8 = document.getElementById('number-8');
const elementNumber7 = document.getElementById('number-7');
const elementNumber6 = document.getElementById('number-6');
const elementNumber5 = document.getElementById('number-5');
const elementNumber4 = document.getElementById('number-4');
const elementNumber3 = document.getElementById('number-3');
const elementNumber2 = document.getElementById('number-2');
const elementNumber1 = document.getElementById('number-1');
const elementNumber0 = document.getElementById('number-0');

elementNumber9.addEventListener('click', () => {
  bindToDisplay('9');
});
elementNumber8.addEventListener('click', () => {
  bindToDisplay('8');
});
elementNumber7.addEventListener('click', () => {
  bindToDisplay('7');
});
elementNumber6.addEventListener('click', () => {
  bindToDisplay('6');
});
elementNumber5.addEventListener('click', () => {
  bindToDisplay('5');
});
elementNumber4.addEventListener('click', () => {
  bindToDisplay('4');
});
elementNumber3.addEventListener('click', () => {
  bindToDisplay('3');
});
elementNumber2.addEventListener('click', () => {
  bindToDisplay('2');
});
elementNumber1.addEventListener('click', () => {
  bindToDisplay('1');
});
elementNumber0.addEventListener('click', () => {
  const currText = getText();
  const arr = currText.split(/[+*\/-]+/);
  console.log(arr);
  // if (currText.split('').length === 0)
  //   return setError('No puede empezar con 0');
  // else if (!isValidLastCharacter(['.']))
  //   return setError('No puede empezar con 0');
  // else
  bindToDisplay('0');
});
