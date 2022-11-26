module.exports = (sequelize, dataTypes) => {
    let alias = 'User'
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "users",
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config);

    return User;
};