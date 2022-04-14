const faker = require('faker');

class UsersService {

  constructor() {
    //Son usuarios por default
    this.users = [
      {
        id: faker.datatype.uuid(),
        name: 'Karol Mejia',
        username: faker.internet.userName('Karol', 'Mejia'),
        email: faker.internet.email('Karol', 'Mejia'),
        avatar: faker.internet.avatar(),
      },
      {
        id: faker.datatype.uuid(),
        name: 'Emilio Larach',
        username: faker.internet.userName('Emilio', 'Larach'),
        email: faker.internet.email('Emilio', 'Larach'),
        avatar: faker.internet.avatar(),
      },
      {
        id: faker.datatype.uuid(),
        name: 'Joe Corrales',
        username: faker.internet.userName('Joe', 'Corrales'),
        email: faker.internet.email('Joe', 'Corrales'),
        avatar: faker.internet.avatar(),
      },
    ];
    this.generate();
  }

  generate() {
    const limit = 50;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        userName: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.internet.avatar(),
      });
    }
  }

  find() {
    return this.users;
  }

  findOne(id) {
    return this.users.find((item) => item.id === id);
  }

  update() {

  }

  delete() {

  }
}


module.exports = UsersService;
