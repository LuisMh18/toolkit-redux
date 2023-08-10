import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    counter:10
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit nos permite escribir lógica "mutante" en reductores. Él
      // en realidad no muta el estado porque usa la biblioteca Immer,
      // que detecta cambios en un "estado de borrador" y produce un nuevo
      // estado inmutable basado en esos cambios
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1
    },
    incrementBy: (state, action) => {
      state.counter += action.payload;
    },
  },
})


// Los creadores de acciones se generan para cada función de reducción de casos
export const { increment, decrement, incrementBy } = counterSlice.actions
