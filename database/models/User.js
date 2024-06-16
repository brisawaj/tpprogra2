module.exports = function(sequelize, dataTypes){

    let alias = "User"

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        email:{
            type: dataTypes.STRING,
        },
        contra:{
            type: dataTypes.STRING,
        },
        fecha:{
            type: dataTypes.DATE,
        },
       dni:{
            type: dataTypes.STRING,
        },
        imagen:{
            type: dataTypes.STRING,
        }

    }

    let config = {
        tableName: "usuario",
        timestamps: true,
        underscored: false

    }

    let User = sequelize.define(alias, cols, config);
    User.associate= function(models){
        User.hasMany(models.Product,{
          //configuracion de la relacion
          as:"productos" , 
          foreignKey: "id" //linea 26
        }),
        User.hasMany(models.Comentario,{
          as: "comentarioDeUsuario" ,
          foreignKey: "id"
        })
    }
    return User

}