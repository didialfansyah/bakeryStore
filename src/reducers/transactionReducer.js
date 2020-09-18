// Reducer Kedua
const initialWallet = {
  wallet: 1000000
}

// Beli Cake
// 50000

const transactionReducer = (state = initialWallet, action) => {
  if (action.type === 'BELI_DONAT') {
    const newState = {
      wallet: state.wallet + 25000
    }
    return newState;
  } else if (action.type === 'REFUND_DONAT') {
    const newState = {
      wallet: state.wallet - 12500
    }
    return newState
  }else if (action.type === 'BELI_CAKE') {
    const newState = {
      wallet: state.wallet + 50000
    }
    return newState
  }
  return state;
}

export default transactionReducer;
