import { configureStore } from '@reduxjs/toolkit'
import numberSlice from '../features/number'

const persistedState = localStorage.getItem('reduxState') 
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {}


let store = configureStore({
  reducer: {
    number: numberSlice
  },
  //uncomment row below to load store from LocalStorage
// preloadedState: persistedState
})


//uncomment row below to save store from LocalStorage
// store.subscribe(() => {
//   let toSave = store.getState()
//   let save = { ...toSave, weather: {weather:[]} }
//   localStorage.setItem('reduxState', JSON.stringify(save))
// })

export default store