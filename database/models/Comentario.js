module.exports = function(sequelize, dataTypes){

let alias = "Comentario"

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        usuario_id:{
            type: dataTypes.INTEGER,
        },

        products_id:{
            type: dataTypes.INTEGER,
        },
        
        comentario:{
            type: dataTypes.STRING,
        }

    }

    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: false

    }


    let Comentario = sequelize.define(alias, cols, config)
    Comentario.associate= function(models){
        Comentario.belongsTo(models.Product,{
          //configuracion de la relacion
          as:"Usuario" , 
          foreignKey: "products_id" //linea 26
        }
    ),
    Comentario.belongsTo(models.User,{
        as: "usuarioQueComenta",
        foreignKey: "usuario_id"
    })

}  
    return Comentario

}