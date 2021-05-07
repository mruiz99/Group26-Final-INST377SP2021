export default (database, DataTypes) => {
  const genres = database.define(
    'genre',
    {
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      genre_name: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return genres;
};
