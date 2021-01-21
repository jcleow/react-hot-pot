export default function personModel(sequelize, DataTypes) {
  return sequelize.define('person', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.TEXT,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
    },
    bill_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'bills',
        key: 'id',
      },
    },
  }, {
    underscored: true,
  });
}
