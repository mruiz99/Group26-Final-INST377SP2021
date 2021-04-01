export default (sequelize, DataTypes) => {
  const games = sequelize.define(
    'games',
    {
      game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      game_name: {
        type: DataTypes.STRING
      },
      date_published: {
        type: DataTypes.STRING // change to INTEGER if possible
      },
      genre_id: {
        type: DataTypes.INTEGER, // FK
        FOREIGNKEYS: true
      },
      na_sales: {
        type: DataTypes.DECIMAL
      },
      jp_sales: {
        type: DataTypes.DECIMAL
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return games;
};
