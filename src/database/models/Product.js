module.exports = (sequelize, dataTypes) => {
  let alias = 'Product'
  let cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER
    },
    name: {
      type: dataTypes.STRING
    },
    description: {
      type: dataTypes.STRING
    },
    price: {
      type: dataTypes.DECIMAL(11, 2)
    },
    product_categories_id: {
      type: dataTypes.INTEGER
    }
  };
  let config = {
    tableName: "products",
    timestamps: false
  }
  const Product = sequelize.define(alias, cols, config);

  return Product;
};