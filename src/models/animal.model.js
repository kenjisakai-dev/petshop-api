import Sequelize from 'sequelize';
import db from '../repository/db.js';
import Owner from './owner.model.js';

const Animal = db.define(
    'animal',
    {
        cod_animal: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        bread: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        color: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { underscored: true },
);

Animal.belongsTo(Owner, { foreignKey: 'cod_owner' });
Owner.hasMany(Animal, { foreignKey: 'cod_owner' });

export default Animal;
