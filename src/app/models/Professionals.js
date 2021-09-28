import Sequelize, { Model } from 'sequelize';
import Project from './Project';

class Professionals extends Model {
  static init(sequelize) {
    super.init(
      {
        registration: Sequelize.INTEGER,
        professionalType: Sequelize.STRING,
      },
      {
        sequelize,
        // options
      },
    );
    return this;
  }

  static associate(models) {
    Professionals.hasMany(models.Project, { foreignKey: 'fk_idProfessional', as: 'Projects' });
  }
}

export default Professionals;
