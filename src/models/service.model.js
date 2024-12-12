import Sequelize from 'sequelize';
import db from '../repository/db.js';
import Animal from './animal.model.js';

const Service = db.define(
    'service',
    {
        cod_service: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        value: {
            type: Sequelize.DECIMAL,
            allowNull: false,
        },
    },
    { underscored: true },
);

Service.belongsTo(Animal, { foreignKey: 'cod_animal' });
Animal.hasMany(Service, { foreignKey: 'cod_animal' });

export default Service;
