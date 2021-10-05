import Sequelize from 'sequelize';
import User from '../app/models/User';
import dbConfig from '../config/database';
import Professionals from '../app/models/Professionals';
import Guardian from '../app/models/Guardian';
import Ec from '../app/models/Ec';
import Class from '../app/models/Class';
import Child from '../app/models/Child';
import Project from '../app/models/Project';

const models = [User, Ec, Class, Child, Professionals, Guardian, Project];
const assoc = [Class, Professionals, Project];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    models.map((model) => model.init(this.connection));
    assoc.map((model) => model.associate(this.connection.models));
  }
}

export default new Database();
