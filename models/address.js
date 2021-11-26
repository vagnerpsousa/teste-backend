module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    complement: DataTypes.STRING,
    number: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    cep: { type: DataTypes.STRING },
    doctorId: { type: DataTypes.INTEGER },
  },
    {
      timestamps: false,
    });

    Address.associate = (models) => {
      Address.belongsTo(models.Doctor,
        { foreignKey: 'id', as: 'Doctor' });
    };
  return Address;
};