import dbConfig from '../config/database';
import Sequelize from 'sequelize';
import User from '../app/models/User';
import Professionals from '../app/models/Professionals';
import Guardian from '../app/models/Guardian';
import Ec from '../app/models/Ec';
import Class from '../app/models/Class';
import Child from '../app/models/Child';
import Project from '../app/models/Project';
import GuardianChild from '../app/models/GuardianChild';
import ClassProject from '../app/models/ClassProject';
import Anotation from '../app/models/Anotation';
import ClassProfessional from '../app/models/ClassProfessional';

const models = [User, Ec, Class, Child, Professionals, Guardian, Project, GuardianChild, ClassProject, Anotation, ClassProfessional];
const assoc = [Class, Professionals, Project, Child, Guardian, Anotation];

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
