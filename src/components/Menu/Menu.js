import React from "react";
import { Route, Link } from "react-router-dom";

// CUSTOM LINK: HOME, Quan Ly San Pham
const menus = [
  {
    name: "Home",
    to: "/",
    exact: true,
  },
  {
    name: "Quan Ly San Pham",
    to: "/product-list",
    exact: false,
  },
];

const MenuLink = ({ label, to, exact }) => {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};

class Menu extends React.Component {
  showMenu = (menus) => {
    var result = null;
    if (menus.length) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            exact={menu.exact}
          />
        );
      });
    }
    return result;
  };
  render() {
    return (
      <div
        className="
      navbar-default"
      >
        <a className="navbar-brand" href="/#">
          Call API
        </a>
        <ul className="nav navbar-nav">
          {/* <li className="active">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#">Quan Ly San Pham</a>
          </li> */}
          {this.showMenu(menus)}
        </ul>
      </div>
    );
  }
}
export default Menu;
