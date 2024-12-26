import { createStore } from 'vuex'

export default createStore({
    state: {
        openProjectId: null
    },
    mutations: {
        setOpenProject(state, projectId) {
            state.openProjectId = projectId
        }
    },
    actions: {
        toggleProject({ state, commit }, projectId) {
            if (state.openProjectId === projectId) {
                commit('setOpenProject', null)
            } else {
                commit('setOpenProject', projectId)
            }
        }
    }
})
