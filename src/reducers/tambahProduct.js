const initialProduct = {
    donat : 7,
    cake : 4
}

const tambahProduct = (state = initialProduct, action) =>{
    if(action.type === 'BUAT_DONAT_COKLAT') { 
        const newState = {
            donat : state.donat + 1,
            cake : state.cake
        }

        return newState;
    }else if(action.type === 'BUAT_CAKE') { 
        const newState = {
            donat : state.donat,
            cake : state.cake + 1
        }

        return newState;
    }else if(action.type === 'BELI_DONAT') { 
        const newState = {
            donat : state.donat - 1,
            cake : state.cake
        }

        return newState;
    }else if(action.type === 'BELI_CAKE') { 
        const newState = {
            donat : state.donat,
            cake : state.cake - 1
        }

        return newState;
    }

    return state;
}

export default tambahProduct