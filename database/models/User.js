module.exports = function(sequelize, datatypes){

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
        tableName: "users",
        timestamps: true,
        underscored: true

    }

    let User = sequelize.define(alias, cols, config)
    return User

}