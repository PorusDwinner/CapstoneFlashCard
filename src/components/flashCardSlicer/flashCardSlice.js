import { createSlice } from "@reduxjs/toolkit";

// The of the initialState is 'flashcards' and value will be checked first if exist and parsed JSON
// Local storage is the storage provided by the web browser which is stored locally
const initialState = {
    flashcards:localStorage.getItem('flashcards') ? 
    JSON.parse(localStorage.getItem('flashcards')) : [],

    showFlash : false,
    modal : false,
    compareId :'',
}

// Slices can be created with redux-toolkit only, redux alone is not sufficient
export const flashCardSlice = createSlice({
    name:'flashcard',
    initialState,
    reducers: {
        // When setFlashCard is called, in the state/global store values(entered by the user) will be pushed
        setFlashCard(state, action){
            state.flashcards.push({
                card: action.payload,
            })
        // Now values will be added in the local storage for the key 'flashcards' in the initialState
            localStorage.setItem('flashcards',JSON.stringify(state.flashcards));
        },
        
        // To change the state of the 'showFlash' in global state
        setShowFlash(state, action){
            state.showFlash = !state.showFlash;
        },

        setId(state, action){
            state.compareId = action.payload;
        },

        setModal(state, action){
            state.modal = !state.modal;
        }
        
    },
});

export const {setFlashCard, setShowFlash, setId, setModal} = flashCardSlice.actions;   // we will be using setFlashCard when user clicks create button
export default flashCardSlice.reducer;                                                                            // we will be using this to create sotre
