const mutations = {
    ['SET_USER'](state, user) {
        state.user = user
    },
    ['SET_REGISTER'](state, payload) {
        state.register = payload
    }
};

export default mutations;