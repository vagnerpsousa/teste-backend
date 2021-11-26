module.exports = (sequelize, DataTypes) => {
  const MedicalSpecialty = sequelize.define('MedicalSpecialty', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    specialtyName: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  return MedicalSpecialty;
};