const initialState = {
  products: []
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CART":
      console.log(action.data)
      const isExist = state.products?.find(e => e._id === action.data?._id)
      const productList = isExist
        ? state.products?.map(e => e._id === action.data._id ? ({ ...e, quantity: e.quantity + 1}): e)
        : [...state.products, action.data]
      return {
        products: productList
      };
    case "REMOVE_CART":
      return {
        products: state.products?.filter(e => e?._id !== action.data?._id)
      };
    case "REMOVE_ALL":
      return {
        products: []
      };
    case "CHANGE_QUANTITY":
      const isReduce = action.changeQuantityType === 'reduce'
      const productListChangeQuantity = state.products?.map(e => e._id === action.data._id ? ({ ...e, quantity: isReduce ? (e.quantity - 1) : (e.quantity + 1) }) : e)
      return {
        products: productListChangeQuantity
        
      };
    /*case "UP_QUANTITY":
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
      };*/
    default:
      return state;
  }
}
