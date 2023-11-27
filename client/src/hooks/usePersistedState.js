/* eslint-disable no-unused-vars */

import { useState } from "react"

export default function usePersistedState(key,defaultValue){

    const [state,setState] = useState(() => {
        const persistedStated = localStorage.getItem(key);

        if(persistedStated){
            return JSON.parse(persistedStated)
        }
        return defaultValue
    });

    const setPersistedState = (value) => {
        setState(value);
        
        let serializedValue;
        let resultState = state;
        if(typeof value === 'function'){
         serializedValue = JSON.stringify(value(state));
        } else {
         serializedValue = JSON.stringify(value);

        }


        localStorage.setItem(key,serializedValue);
    }


    return [
        state,
        setPersistedState
    ]
}