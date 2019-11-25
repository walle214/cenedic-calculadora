import styles from './scss/main.scss';
class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }

}

let user = new User("Mark");
user.sayHi();