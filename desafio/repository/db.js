import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  'postgres://gtvnjraj:YxRO3-XBeHCBP0TsB-lYe_svq_eXrUqA@john.db.elephantsql.com/gtvnjraj',
  {
    dialect: 'postgres',
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
