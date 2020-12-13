const elementDisplayResult = document.getElementById('display-result');
const elementDisplayText = document.getElementById('display-text');
const elementDisplayDelete = document.getElementById('display-delete');
const elementDisplayError = document.getElementById('display-error');
const elementResultClear = document.getElementById('result-clear');
elementResultClear.addEventListener('click', () => {
  elementDisplayText.textContent = '';
  elementDisplayResult.textContent = '';
});
elementDisplayDelete.addEventListener('click', () => {
  elementDisplayText.textContent = elementDisplayText.textContent.slice(0, -1);
});
export const bindToDisplay = (caracter) => {
  elementDisplayText.textContent += caracter;
  elementDisplayText.scrollLeft = elementDisplayText.scrollWidth;
};
export const setResult = (result) => {
  elementDisplayResult.textContent = result;
  elementDisplayText.textContent = '';
};
export const setError = (message) => {
  elementDisplayError.textContent = message;
  setTimeout(() => {
    elementDisplayError.textContent = '';
  }, 1000);
};
export const getResult = () => elementDisplayResult.textContent;
export const getText = () => elementDisplayText.textContent;
