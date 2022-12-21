module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey:true,
            allowNUll: false,
            validate: {
                notEmpty : true
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
            }
        },

        cost: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })

    Product.associate = (models) => {
        Product.belongsTo(models.Brand)
    }

    return Product;
}