import { bindToDisplay, getResult } from './display';
const elementMemoryRead = document.getElementById('memory-read');
const elementMemoryAdd = document.getElementById('memory-add');
const elementMemoryDelete = document.getElementById('memory-delete');
window.addEventListener('load', () =>
  localStorage.setItem('memory', localStorage.getItem('memory') || '')
);
elementMemoryRead.addEventListener('click', () => {
  let mem = localStorage.getItem('memory');
  if (!!mem) mem = Number(mem);
  else return;
  bindToDisplay(mem);
});
elementMemoryAdd.addEventListener('click', () => {
  localStorage.setItem('memory', getResult());
});
elementMemoryDelete.addEventListener('click', () => {
  localStorage.setItem('memory', '');
});
