// import * as Types from "./../constants/ActionTypes";
var innitialState = [
  {
    id: 1,
    name: "Iphone 6s",
    price: 500,
    status: true,
  },
  {
    id: 2,
    name: "SamSung galaxy note 10",
    price: 900,
    status: false,
  },
];

const products = (state = innitialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
export default products;
