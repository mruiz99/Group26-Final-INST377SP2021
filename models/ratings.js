export default (sequelize, DataTypes) => {
    const ratings = sequelize.define(
      'Ratings',
      {
        rating_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        rating: {
          type: DataTypes.STRING, 
          allowNull: false
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    return ratings;
  };
  