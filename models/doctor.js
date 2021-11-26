module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define("Doctor", {
    name: { type: DataTypes.STRING, allowNull: false },
    crm: { type: DataTypes.STRING, allowNull: false },
    landLine: { type: DataTypes.STRING, allowNull: false },
    cellPhone: { type: DataTypes.STRING, allowNull: false },
    cep: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false, 
  });

  Doctor.associate = (models) => {
    Doctor.hasOne(models.Address, { foreignKey: 'doctorId', as: 'Address' });
  };

  return Doctor;
};