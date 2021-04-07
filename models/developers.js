export default (sequelize, DataTypes) => {
    const developers = sequelize.define(
      'Developers',
      {
        developer_team_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        developer_name: {
          type: DataTypes.STRING, 
          allowNull: false
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    return developers;
  };
  