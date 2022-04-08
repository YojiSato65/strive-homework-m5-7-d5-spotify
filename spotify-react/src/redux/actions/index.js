export const ADD_TO_LIKED = 'ADD_TO_LIKED'
export const SET_SELECTED_SONG = 'SET_SELECTED_SONG'


export const addToLikedAction = (track) => ({
    type: ADD_TO_LIKED,
    payload: track
})


export const setSelectedSongAction = (track, albumImg) => ({
    type: SET_SELECTED_SONG,
    payload: { track, albumImg }
})

