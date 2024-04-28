const initialState = {
  loading: "idle",
  entities: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "cart/add": {
      const product = action.payload;
      return {
        ...state,
        entities: [...state.entities, product],
      };
    }
    case "cart/update": {
      const product = action.payload;
      return {
        ...state,
        entities: {
          ...state.entities,
          [product.id]: product,
        },
      };
    }
    case "cart/remove": {
      const newEntities = state.entities.filter(
        (item, index) => index !== action.payload
      );
      return {
        ...state,
        entities: newEntities,
      };
    }
    case "cart/loading": {
      return {
        ...state,
        loading: "loading",
      };
    }
    case "cart/loaded": {
      const newEntities = [];
      action.payload.forEach((element) => {
        newEntities[element.id] = element;
      });
      return {
        ...state,
        loading: "idle",
        entities: newEntities,
      };
    }
    case "cart/details": {
      return state;
    }
    default:
      return state;
  }
}

export const cartLoading = () => ({
  type: "cart/loading",
});

export const cartLoaded = (products) => ({
  type: "cart/loaded",
  payload: products,
});

export const cartAdd = (product) => ({
  type: "cart/add",
  payload: product,
});

export const cartUpdate = (product) => ({
  type: "cart/update",
  payload: product,
});

export const cartRemove = (productId) => ({
  type: "cart/remove",
  payload: productId,
});

export const cartDetails = () => ({
  type: "cart/details",
});

// export const fetchCart = () => async (dispatch) => {
// dispatch(cartLoading());
// const response = await fetch("https://fakestoreapi.com/products").then(
//   (res) => res.json()
// );
// console.log(response);
// dispatch(cartLoaded(response));
// };

// export function addNewProductToCart(product) {
//   return async function addNewProductToCartThunk(dispatch, getState) {
//     const response=await a ==>TODO:send information to  server
//   };
// }
