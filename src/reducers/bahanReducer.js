// Initial State
const initialBahan = {
  tepung: 100,
  coklat: 100,
  cherry: 50,
  mentega: 200,
  telor: 100,
}

// Buat Cake Action
// cherry - 10
// mentega - 50
// telor - 5

const bahanReducer = (state = initialBahan, action) => {
  if (action.type === 'BUAT_DONAT_COKLAT') {
    const newState = {
      tepung: state.tepung - 50,
      coklat: state.coklat - 30,
      cherry: state.cherry,
      mentega: state.mentega,
      telor: state.telor,
    }
    return newState;
  }else if(action.type === 'BUAT_CAKE') {
    const newState = {
      tepung: state.tepung,
      coklat: state.coklat,
      cherry: state.cherry - 10,
      mentega: state.mentega - 50,
      telor: state.telor - 5,
    }

    return newState;
  }
      
  return state;
}

export default bahanReducer;
