const css = require('./stylesheets/main.scss');
let dog = 'beauty';
let cat;

[dog = 'buster', cat = 'Morty'] = [cat, dog];

console.log(dog, cat);