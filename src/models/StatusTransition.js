module.exports = (sequelize, DataTypes) => {
  const StatusTransition = sequelize.define('StatusTransition', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    fromStatus: { type: DataTypes.STRING },
    toStatus: { type: DataTypes.STRING },
  });
  return StatusTransition;
};
