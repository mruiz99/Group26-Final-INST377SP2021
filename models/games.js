export default (sequelize, DataTypes) => {
  const games = sequelize.define(
    'Games',
    {
      game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      game_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date_published: {
        type: DataTypes.STRING, // change to INTEGER if possible
        allowNull: false
      },
      genre_id: {
        type: DataTypes.INTEGER, // FK
        allowNull: false,
        FOREIGNKEYS: true
      },
      na_sales: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      jp_sales: {
        type: DataTypes.DECIMAL,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return games;
};
