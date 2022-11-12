import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';
import moduleUser from './modules/users';

export default createStore({
    modules: {
        moduleUser
    },
    plugins:[
        new VuexPersistence({
            storage: window.localStorage
        }).plugin
    ]
})