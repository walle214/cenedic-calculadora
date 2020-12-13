import { calcResult } from './actions';
import { bindToDisplay, getText, setError } from './display';
import { isValidLastCharacter } from './utils';

const elementOperationDivide = document.getElementById('operation-divide');
const elementOperationMultiply = document.getElementById('operation-multiply');
const elementOperationSubstract = document.getElementById(
  'operation-substract'
);
const elementNumberdot = document.getElementById('number-dot');
const elementOperationAdd = document.getElementById('operation-add');
const elementOperationEquals = document.getElementById('operation-equals');
const pushCharacterMultiplyDiv = (caracter) => {
  isValidLastCharacter()
    ? bindToDisplay(caracter)
    : setError('Caracter inválido');
};
const pushCharacterAddSubs = (caracter) => {
  const currText = getText();
  if (currText.split('').length === 0 && caracter === '+') return;
  if (currText.split('').length === 0 && caracter === '-')
    return bindToDisplay(caracter);
  isValidLastCharacter()
    ? bindToDisplay(caracter)
    : setError('Caracter inválido');
};
elementOperationDivide.addEventListener('click', () =>
  pushCharacterMultiplyDiv('/')
);
elementOperationMultiply.addEventListener('click', () =>
  pushCharacterMultiplyDiv('*')
);
elementOperationSubstract.addEventListener('click', () =>
  pushCharacterAddSubs('-')
);
elementOperationAdd.addEventListener('click', () => pushCharacterAddSubs('+'));
elementNumberdot.addEventListener('click', () => {
  const currText = getText();
  const arr = currText.split(/[+*\/-]+/);
  console.log(arr);
  if (currText.split('').length === 0)
    return setError('No puede empezar con punto decimal');
  else if (!isValidLastCharacter())
    return setError('No puede empezar con punto decimal');
  else if (arr[arr.length - 1].includes('.'))
    return setError('Solo se puede poner un punto');
  else bindToDisplay('.');
});
elementOperationEquals.addEventListener('click', calcResult);
