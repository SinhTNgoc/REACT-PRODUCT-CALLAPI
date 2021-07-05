import React from "react";
import callApi from "../../utils/ApiCaller";
import { Link } from "react-router-dom";

class ProductActionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      chkbStatus: false,
    };
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  // Them 1 san pham moi 
  componentDidMount() {
    // console.log('componentDidMount');
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      callApi(`products/${id}`, "GET", null).then((res) => {
        var data = res.data;
        this.setState({
          id: data.id,
          txtName: data.name,
          txtPrice: data.price,
          chkbStatus: data.status,
        });
      });
    }
  }
  onSave = (e) => {
    var { id, txtName, txtPrice, chkbStatus } = this.state;
    var { history } = this.props;
    e.preventDefault();
    // Truong hop Update
    if (id) {
      //http//localhost:3000/products/:id ==> HTTP method : PUT
      callApi(`products/${id}`, "PUT", {
        name: txtName,
        price: txtPrice,
        status: chkbStatus,
      }).then((res) => {
        history.goBack();
      });
      // console.log('update....')
    }
    //Truong hop Edit
    else {
      callApi("products", "POST", {
        name: txtName,
        price: txtPrice,
        status: chkbStatus,
      }).then((res) => {
        history.goBack();
      });
    }
  };

  render() {
    // console.log('render');
    var { txtName, txtPrice, chkbStatus } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Ten San Pham</label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              value={txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Gia San Pham</label>
            <input
              type="number"
              className="form-control"
              name="txtPrice"
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Trang thai</label>
          </div>

          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                name="chkbStatus"
                value={chkbStatus}
                onChange={this.onChange}
                checked={chkbStatus}
              />
              Con hang
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Luu lai
          </button>
          <Link to="/product-list" className="btn btn-danger ml-10">
            Tro lai
          </Link>
        </form>
      </div>
    );
  }
}
export default ProductActionPage;
