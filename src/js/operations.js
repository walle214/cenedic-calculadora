import { calcResult } from './actions';
import { bindToDisplay } from './display';

const elementOperationDivide = document.getElementById('operation-divide');
const elementOperationMultiply = document.getElementById('operation-multiply');
const elementOperationSubstract = document.getElementById(
  'operation-substract'
);
const elementNumberdot = document.getElementById('number-dot');
const elementOperationAdd = document.getElementById('operation-add');
const elementOperationEquals = document.getElementById('operation-equals');

elementOperationDivide.addEventListener('click', () => {
  bindToDisplay('/');
});
elementOperationMultiply.addEventListener('click', () => {
  bindToDisplay('*');
});
elementOperationSubstract.addEventListener('click', () => {
  bindToDisplay('-');
});
elementNumberdot.addEventListener('click', () => {
  bindToDisplay('.');
});
elementOperationAdd.addEventListener('click', () => {
  bindToDisplay('+');
});
elementOperationEquals.addEventListener('click', calcResult);
