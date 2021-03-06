import React from "react";
import { Link } from "react-router-dom";

class ProductItem extends React.Component {
  onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      //Nhận lại props -> thuc thi  func khi onClick
      this.props.onDelete(id);
    }
  };
  render() {
    var { product, index } = this.props;
    var statusName = product.status ? "Con hang" : "Het hang";
    var statusClass = product.status ? "warning" : "default";

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`label label-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <Link to={`product/${product.id}/edit`} className="btn btn-primary mr-10">
            Sua
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.onDelete(product.id)}
          >
            Xoa
          </button>
        </td>
      </tr>
    );
  }
}
export default ProductItem;
