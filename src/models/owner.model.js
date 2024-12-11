import Sequelize from 'sequelize';
import db from '../repository/db.js';

const Owner = db.define(
    'owner',
    {
        cod_owner: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        cpf: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { underscored: true },
);

export default Owner;
