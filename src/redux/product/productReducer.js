const initialState = {
  loading: "idle",
  products: [],
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "product/add": {
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    }
    case "product/remove": {
      const newProducts = state.products.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        products: newProducts,
      };
    }
    case "product/loading": {
      return {
        ...state,
        loading: "loading",
      };
    }
    case "product/loaded": {
      return {
        ...state,
        loading: "idle",
        products: action.payload,
      };
    }
    default:
      return state;
  }
}

export const productLoading = () => ({
  type: "product/loading",
});

export const addProduct = (product) => ({
  type: "product/add",
  payload: product,
});

export const removeProduct = (id) => ({
  type: "product/remove",
  payload: id,
});

export const productLoaded = (products) => ({
  type: "product/loaded",
  payload: products,
});

export const fetchProducts = () => async (dispatch) => {
  dispatch(productLoading());
  const response = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  dispatch(productLoaded(response));
};
