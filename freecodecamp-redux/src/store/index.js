import { createStore } from 'redux';

const reducerFn = (state = {counter: 0} , action) => {

    //Função Assincrona
    // Não se deve mudar o estadop original
    if (action.type === 'INC') {
        return { counter: state.counter+1 }
    }

    if (action.type === 'DEC') {
        if(state.counter > 0){
            return { counter: state.counter-1 }

        }
    }

    if(action.type === 'ADD') {
        return { counter: state.counter + action.payload }
    }

    return state;
}

const store = createStore(reducerFn);

export default store;