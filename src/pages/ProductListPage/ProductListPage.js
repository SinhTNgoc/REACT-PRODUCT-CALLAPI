import React from "react";
import ProductList from "./../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import callApi from "./../../utils/ApiCaller";
import { Link } from "react-router-dom";

class ProductListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  //Render ra list san pham
  componentDidMount() {
    // console.log('componentDidMount');
    callApi("products", "GET", null).then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }

  showProducts = (products) => {
    var result = null;
    if (products.length) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  };
// Xoa san pham
  onDelete = (id) => {
    var products = this.state.products;
    callApi(`products/${id}`, "DELETE", null).then((res) => {
      if (res.status === 200) {
        // var index = this.findIndex(products, id);
        // if (index !== -1) {
        //   products.splice(index, 1);
        //   this.setState({ products: products });
        // }
        products = products.filter((product) => product.id !== id);
        this.setState({ products: products });
      }
    });
  };
  // findIndex = (products, id) => {
  //   var result = -1;
  //   products.forEach((product, index) => {
  //     if (product.id === id) {
  //       result = index;
  //     }
  //   });
  //   return result;
  // };

  render() {
    // console.log('render');
    // var products = this.props.products;
    var products = this.state.products;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/product/add" className="btn btn-info mb-10">
          Them San Pham
        </Link>
        <ProductList>{this.showProducts(products)}</ProductList>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps, null)(ProductListPage);
