export default (sequelize, DataTypes) => {
    const platform = sequelize.define(
      'platform',
      {
        platform_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        platform_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    return platform;
  };
  