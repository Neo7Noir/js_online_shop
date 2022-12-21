module.exports = (sequelize, DataTypes) => {
    const Brand = sequelize.define("Brand",{
        id:{
            type : DataTypes.UUID,
            defaultValue : DataTypes.UUIDV1,
            primaryKey: true,
            allowNUll : false,
            validate : {
                notEmpty : true
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull : false,
            unique : true
        }
    })

    Brand.associate = (models) => {
        Brand.hasMany(models.Product)
    }

    return Brand;
}