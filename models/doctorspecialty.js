module.exports = (sequelize, _DataTypes) => {
  const DoctorSpecialty = sequelize.define('DoctorSpecialty',
    {},
    { timestamps: false },
  );

  DoctorSpecialty.associate = (models) => {
    models.MedicalSpecialty.belongsToMany(models.Doctor, {
      as: 'Doctors',
      through: DoctorSpecialty,
      foreignKey: 'specialtyId',
      otherKey: 'doctorId',
    });
    models.Doctor.belongsToMany(models.MedicalSpecialty, {
      as: 'MedicalSpecialties',
      through: DoctorSpecialty,
      foreignKey: 'doctorId',
      otherKey: 'specialtyId',
    });
  };

  return DoctorSpecialty;
};