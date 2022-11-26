module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductCategory'
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
        tableName: "product_categories",
        timestamps: false
    }
    const productcategory = sequelize.define(alias, cols, config);

    return productcategory;
};