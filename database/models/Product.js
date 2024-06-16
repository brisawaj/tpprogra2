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
        underscored: false

    }


    let Product = sequelize.define(alias, cols, config)
    Product.associate= function(models){
        Product.belongsTo(models.User,{
          //configuracion de la relacion
          as:"vendedor" , 
          foreignKey: "usuario_id" //linea 26
        },
        Product.hasMany(models.Comentario,{
            as:"cometarios",
            foreignKey: "id"
        })
    )
}
    return Product
}