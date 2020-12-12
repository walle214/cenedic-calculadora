import { bindToDisplay, getResult } from './display';
const elementMemoryRead = document.getElementById('memory-read');
const elementMemoryAdd = document.getElementById('memory-add');
const elementMemoryDelete = document.getElementById('memory-delete');

elementMemoryRead.addEventListener('click', () => {
  bindToDisplay(Number(localStorage.getItem('memory') || ''));
});
elementMemoryAdd.addEventListener('click', () => {
  localStorage.setItem('memory', getResult());
});
elementMemoryDelete.addEventListener('click', () => {
  localStorage.setItem('memory', '');
});
