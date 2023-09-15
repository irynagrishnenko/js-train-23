class ContentContainer {
  elements = [];
  addElement(element) {
    this.elements.push(element);
  }
  removeElement(element) {
    const index = this.elements.indexOf(element);
    if (index !== -1) {
      this.elements.splice(index, 1);
    }
  }
}

class Message extends ContentContainer {
  constructor(content) {
    super();
    this.content = content;
  }
  display() {
    console.log(`Повідомлення: ${this.content}`);
    for (const element of this.elements) {
      element.display();
    }
  }
}

class Article extends ContentContainer {
  constructor(title) {
    super();
    this.title = title;
  }
  display() {
    console.log(`Стаття: ${this.title}`);
    for (const element of this.elements) {
      element.display();
    }
  }
}

console.log("Завдання 1 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо об'єкт Article з назвою "Навчальна стаття"
const article = new Article("Навчальна стаття");

// Додаємо повідомлення до статті
article.addElement(new Message("Дуже корисна стаття"));
article.addElement(new Message("Дякую за чудовий матеріал!"));

// Додаємо вкладене повідомлення до першого повідомлення в статті
article.elements[0].addElement(new Message("Відповідь: Згоден!"));

// Виводимо інформацію про статтю та всі її вкладені елементи
article.display();

// Виводимо масив вкладених елементів статті
console.log(article.elements);
// =====================================================================================================================================

class Group {
  static #groups = {};

  constructor(name) {
    this.name = name;
  }

  static create(name) {
    if (!this.#groups[name]) {
      this.#groups[name] = new Group(name);
    }
    return this.#groups[name];
  }
}

class Product {
  constructor(name, group) {
    this.name = name;
    this.group = group;
  }

  display() {
    console.log(`Продукт: ${this.name}, Група: ${this.group.name}`);
  }
}

console.log("Завдання 2 ====================================");
// Після виконання розкоментуйте код нижче

// Створення груп за допомогою методу Group.create. Цей метод гарантує, що кожна група з унікальною назвою буде створена лише один раз.
const electronics = Group.create("Електроніка");
const books = Group.create("Книги");
const electronics2 = Group.create("Електроніка");

// Виведення груп в консоль. Ми бачимо, що electronics та electronics2 - це один і той же об'єкт.
console.log(electronics, books, electronics2);
console.log(electronics === electronics2); // true

// Створення продуктів. Кожен продукт належить до певної групи.
const product1 = new Product("Ноутбук", electronics);
const product2 = new Product("Навушники", electronics);
const product3 = new Product("Воно", books);
const product4 = new Product("Смартфон", Group.create("Електроніка")); // тут створюється нова група або використовується вже створена

// Виведення продуктів в консоль.
product1.display();
product2.display();
product3.display();
product4.display();

// Перевірка, чи належать два продукти до однієї групи.
console.log(product1.group === product4.group); // true

// Фільтрація продуктів за групою. В даному випадку виводяться тільки продукти групи "Електроніка".
const list = [product1, product2, product3, product4].filter(
  (product) => product.group === Group.create("Електроніка")
);

console.log(list); // виводиться список продуктів, що належать до групи "Електроніка"
// ==================================================================================================================================

class TeaMaker {
  makeTea() {
    this.boilWater();
    this.addTeaLeaves();
    this.#steepTea();
    this.pourIntoCup();
    this.addCondiments();
    this.serveTea();
  }

  boilWater() {
    console.log("Кип'ятимо воду....");
  }

  addTeaLeaves() {
    console.log("Додаємо чайні листки....");
  }

  #steepTea() {
    console.log("Заварюємо чай....");
  }

  pourIntoCup() {
    console.log("Переливаємо чай в чашку....");
  }

  addCondiments() {}

  serveTea() {
    console.log("Чай подається!");
  }
}

class GreenTeaMaker extends TeaMaker {
  addCondiments() {
    console.log("Додаємо мед, щоб приготувати зелений чай...");
  }
}

class BlackTeaMaker extends TeaMaker {
  addCondiments() {
    console.log("Додаємо мед, щоб приготувати чорний чай...");
  }
}

console.log("Завдання 3 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо екземпляри класів GreenTeaMaker та BlackTeaMaker.
const greenTeaMaker = new GreenTeaMaker();
greenTeaMaker.makeTea();

const blackTeaMaker = new BlackTeaMaker();
blackTeaMaker.makeTea();
// =======================================================================================================================================

class Letter {
  constructor(title, text) {
    this.title = title;
    this.text = text;
  }
}

class Picture {
  constructor(title, size) {
    this.title = title;
    this.size = size;
  }
}

class Movie {
  constructor(title, duration) {
    this.title = title;
    this.duration = duration;
  }
}

class Portfolio {
  elements = [];
  addElement(element) {
    this.elements.push(element);
  }
  readLetter(letter) {
    console.log(
      `"Лист: ${letter.title}, Розмір: ${letter.text.length} символів"`
    );
  }
  readPicture(picture) {
    console.log(`"Картина: ${picture.title}, Розмір: ${picture.size} KB"`);
  }
  readMovie(movie) {
    console.log(
      `"Фільм: ${movie.title}, Тривалість: ${movie.duration} хвилин"`
    );
  }
  readElements() {
    for (const element of this.elements) {
      if (element instanceof Letter) {
        this.readLetter(element);
      } else if (element instanceof Picture) {
        this.readPicture(element);
      } else if (element instanceof Movie) {
        this.readMovie(element);
      }
    }
  }
}

console.log("Завдання 4 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо екземпляр класу Portfolio
const myPortfolio = new Portfolio();

// Створюємо різні об'єкти
const letter = new Letter("My Letter", "Hello, this is a letter.");
const picture = new Picture("My Picture", 2048);
const movie = new Movie("My Movie", 120);

// Додаємо об'єкти до портфоліо
myPortfolio.addElement(letter);
myPortfolio.addElement(picture);
myPortfolio.addElement(movie);

// Виводимо всі об'єкти в портфоліо
console.log(myPortfolio.elements);

// Читаємо інформацію про всі об'єкти в портфоліо
myPortfolio.readElements();
// =================================================================================================================================

class BankTransfer {
  initiateTransfer(amount) {
    const calculatedAmount = this.calculateFee(amount);
    console.log(`Ініціюємо банківський переказ: $${calculatedAmount}`);
  }
  calculateFee(amount) {
    return amount * 1.02;
  }
}

class WalletTransfer {
  processTransfer(amount) {
    console.log(`Здійснюємо переказ з гаманця: $${amount}`);
  }
}

class TransferAdapter {
  constructor(transferSystem) {
    this.transferSystem = transferSystem;
  }

  initiateTransfer(amount) {
    const calculatedAmount = this.calculateFee(amount);
    this.transferSystem.processTransfer(calculatedAmount);
    return calculatedAmount;
  }

  calculateFee(amount) {
    return amount * 1.2;
  }
}
console.log("Завдання 5 ====================================");
// Після виконання розкоментуйте код нижче

// Створимо екземпляри BankTransfer
const purchase1 = new BankTransfer();
purchase1.initiateTransfer(1000);

const purchase2 = new BankTransfer();
purchase2.initiateTransfer(10);
// ========================================================================================================================================

class Basket {
  constructor(discountPlan) {
    this.discountPlan = discountPlan;
    this.goods = [];
  }
  addGood(good) {
    this.goods.push(good);
  }
  calculateTotalPrice() {
    const totalPrice = this.goods.reduce((acc, good) => acc + good.price, 0);
    return this.discountPlan.applyDiscount(totalPrice);
  }
}

class RegularDiscountPlan extends Basket {
  applyDiscount(price) {
    return price * 0.9;
  }
}

class VIPDiscountPlan extends Basket {
  applyDiscount(price) {
    return price * 0.8;
  }
}

class NewClientDiscountPlan extends Basket {
  applyDiscount(price) {
    return price * 0.95;
  }
}

console.log("Завдання 6 ====================================");
// Після виконання розкоментуйте код нижче

// Створення нового екземпляру кошика зі стратегією знижки для нових клієнтів
const basket1 = new Basket(new NewClientDiscountPlan());

// Додавання товарів до кошика
basket1.addGood({ name: "Product 1", price: 100 });
basket1.addGood({ name: "Product 2", price: 50 });

// Розрахунок і виведення загальної вартості товарів з урахуванням знижки
console.log(basket1.calculateTotalPrice());
// ================================================================================================================================

class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

class EmployeeGroup {
  employees = [];
  addEmployee(employee) {
    this.employees.push(employee);
  }
}

class EmployeeIterator {
  #currentIndex = 0;
  #employees = null;
  constructor(employeeGroup) {
    this.#employees = employeeGroup.employees;
  }

  #hasNext() {
    return this.#currentIndex < this.#employees.length;
  }

  next() {
    if (this.#hasNext()) {
      const employee = this.#employees[this.#currentIndex];
      this.#currentIndex++;
      return employee;
    }
    return null;
  }

  list() {
    return this.#employees.map((employee) => employee.name).join(", ");
  }
}

console.log("Завдання 7 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо нову групу працівників.
const employeeGroup = new EmployeeGroup();

// Додаємо нових працівників до групи, використовуючи метод addEmployee.
employeeGroup.addEmployee(new Employee("John Doe", "Manager", 5000));
employeeGroup.addEmployee(new Employee("Jane Smith", "Developer", 4000));

// Створюємо новий ітератор для групи працівників.
const employeeIterator = new EmployeeIterator(employeeGroup);

// Виводимо імена всіх працівників в групі, використовуючи метод list.
console.log(employeeIterator.list());
// ===============================================================================================================================

class User {
  constructor(name, messenger) {
    this.name = name;
    this.messenger = messenger;
  }
  sendMessage(message) {
    console.log(`${this.name} відправив повідомлення ${message}`);
    return this.messenger.sendMessage(message);
  }
  receiveMessage(user, message) {
    console.log(
      `${this.name} отримав повідомлення від ${user.name}: ${message}`
    );
  }
}

class SMSMessenger {
  static sendMessage(message) {
    console.log(`Відправлено SMS: ${message}`);
  }
}

class EmailMessenger {
  static sendMessage(message) {
    console.log(`Відправлено Email: ${message}`);
  }
}

console.log("Завдання 7 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо двох користувачів - John та Jane - які відправляють повідомлення за допомогою різних месенджерів.
const john = new User("John", SMSMessenger);
const jane = new User("Jane", EmailMessenger);

// John відправляє повідомлення за допомогою SMS.
john.sendMessage("Привіт!"); // Виведе: Відправлено SMS: [John]: Привіт!

// Jane відправляє повідомлення за допомогою Email.
jane.sendMessage("Привіт!"); // Виведе: Відправлено Email: [Jane]: Привіт!
