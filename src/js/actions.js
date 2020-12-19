import { getText, setError, setResult } from './display';
import { isValidLastCharacter } from './utils';

export const calcResult = () => {
  if (!isValidLastCharacter()) return setError('Operacion invalida');
  const result = eval(getText());
  setResult(result.toString() === 'NaN' ? 'Error' : result);
  //   //   const items = getText().split(/[+*\/-]+/);
  //   const { temp, value: items } = getText()
  //     .split('')
  //     .reduce(
  //       (acc, curr) => {
  //         if (curr === '*' || curr === '/' || curr === '-' || curr === '+') {
  //           if (acc.temp !== '') acc.value.push(acc.temp);
  //           acc.value.push(curr);
  //           acc.temp = '';
  //         } else acc.temp += curr;
  //         return acc;
  //       },
  //       { temp: '', value: [] }
  //     );
  //   items.push(temp);
  //   let acc = 0;
  //   console.log(eval(getText()));
  //   //   console.log(items);
  //   // multiply/divide
  //   //   while (items.includes('*') || items.includes('/')){

  //   //   }
  //   // items.forEach((el, i) => {
  //   //   if (el === '*' || el === '/') {
  //   //     const n1 = Number(items[i - 1]);
  //   //     const n2 = Number(items[i + 1]);
  //   //     const temp = el === '*' ? n1 * n2 : n1 / n2;

  //   //     items.splice(i - 1, 3, temp);
  //   //     console.log({ items });

  //   //     //   console.log(items[i - 1], items[i], items[i + 1]);
  //   //   }

  //   // });
};
