// encapsulation
// abstraction
// inheritance -> warisan
// polymorphism ->

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  getPassword() {
    return "*******";
  }

  setUsername(newUsername) {
    if (newUsername.length < 3) {
      throw new Error("Username has to be at least 3 characters");
    }

    // pengecekan di db -> ada yg udah pake username-nya  belom?

    this.username = newUsername;
  }

  speak() {
    return "hello, i am a user";
  }
}

class Admin extends User {
  constructor(username, email, password, division) {
    super(username, email, password);

    this.division = division;
  }

  speak() {
    return "hello, i am an admin";
  }
}

let user1 = new User("theo", "theo@mail.com", "password");
let admin1 = new Admin("rafa", "rafa@mail.com", "password", "sales");

console.log(user1.speak());
console.log(admin1.speak());
