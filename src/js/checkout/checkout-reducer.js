import axios from 'axios';

// Action Type

const BUY_SPOT = 'BUY_SPOT';

// Action Creator

export const buySpot = (spot) => ({
  type: BUY_SPOT,
  spot,
});

// Thunk Creator

export const purchaseSpot = (spot) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/reservations', spot);

      dispatch(buySpot(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const checkoutReducer = (state = [], action) => {
  switch (action.type) {
    case BUY_SPOT:
      return [...state, action.data];
    default:
      return state;
  }
};

export default checkoutReducer;
