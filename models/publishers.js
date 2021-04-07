export default (sequelize, DataTypes) => {
    const publishers = sequelize.define(
      'Publishers',
      {
        publisher_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        publisher_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    return publishers;
  };
  