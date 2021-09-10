const initialState = {
  products: []
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CART":
      console.log(action.data)
      const isExist = state.products?.find(e => e._id === action.data?._id)
      const productList = isExist
        ? state.products?.map(e => {
          if (e._id === action.data._id) {
            return { ...e, quantity: e.quantity + 1}
          } else return e
        }) : [...state.products, action.data]
      return {
        products: productList
      };
    case "REMOVE_CART":
      return {
        products: state.products?.filter(e => e?._id !== action.data?._id)
      };
    case "UP_QUANTITY":
      return {
        products: state.products.map(e => e._id === action.data._id
          ? { ...e, quantity: e.quantity + 1}
          : e
        ),
      };
    case "DOWN_QUANTITY":
      const gia = action.data.price
      return {
        products: state.products.map(e => e._id === action.data._id
          ?  { ...e, quantity: e.quantity !== 1 ? e.quantity - 1 : 1}
          : e
        ),
      };
    default:
      return state;
  }
}
