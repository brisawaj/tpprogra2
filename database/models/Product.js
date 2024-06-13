module.exports = function(sequelize, dataTypes){

    let alias = "Product"

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        usuario_id:{
            type: dataTypes.INTEGER,
        },
        imagen:{
            type: dataTypes.STRING,
        },
        nombre_producto:{
            type: dataTypes.STRING,
        },
       descripcion_producto:{
            type: dataTypes.STRING,
        }

    }

    let config = {
        tableName: "products",
        timestamps: true,
        underscored: true

    }

    let Product = sequelize.define(alias, cols, config)
    return Product

}