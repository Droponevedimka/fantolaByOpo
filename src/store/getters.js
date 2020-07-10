export const getters = {
    getMasks: (state, getters) => () => {
        return state.masks
    },
    getMasksById: (state, getters) => (id) => {
        return state.masks.find(masks => masks.id == id)
    },
    getFinalById: (state, getters) => (id) => {
        return state.final.find(final => final.id == id)
    },   
    getResultImage: (state, getters) => () => {
        return state.resultImg
    }
}
