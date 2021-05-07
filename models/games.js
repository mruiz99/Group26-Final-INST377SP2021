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
        type: DataTypes.STRING,
        allowNull: true
      },
      date_published: {
        type: DataTypes.STRING, // change to INTEGER if possible
        allowNull: true
      },
      genre_id: {
        type: DataTypes.INTEGER, // FK
        allowNull: true,
        FOREIGNKEYS: true
      },
      na_sales: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      jp_sales: {
        type: DataTypes.DECIMAL,
        allowNull: true
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return games;
};
