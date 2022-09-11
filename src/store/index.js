import { createStore } from 'vuex';
// import Vue from 'vue';
// import { createModule } from 'vuex-toast'
import { account } from './account.module';
import { alert } from './toast.module';

export default createStore({
    
    modules: {
        account,
        alert
    }
})