module.exports = (sequelize, DataTypes) => {
  const Burger = sequelize.define ('burger',{
    burgerName: DataTypes.STRING,
    devoured:{
      type: DataTypes.BOOLEAN,
      defaultValue: false}
  },{
    paranoid: true
  });

  return Burger;
}
