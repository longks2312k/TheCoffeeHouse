const initialState = {
  products: []
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "REMOVE_CART_WL":
      return {
        products: state.products?.filter(e => e?._id !== action.data?._id)

      };
    case "ADD_CART_WL":
      console.log(action.data)
      const isWlExist = state.products?.find(e => e._id === action.data?._id)
      const productWishlist = isWlExist
        ? state.products?.map(e => {
          if (e._id === action.data._id) {
            return { ...e, quantity: e.quantity + 1 }
          } else return e
        }) : [...state.products, action.data]
      return {
        products: productWishlist
      };
    case "REMOVE_ALL":
      return {
        products: []
      };

    default:
      return state;
  }
}
