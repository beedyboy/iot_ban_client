import { createStore } from 'vuex';
import { account } from './account.module';
import { alert } from './toast.module';
import { health } from './health.module';

export default createStore({
    
    modules: {
        alert,
        account,
        health,
    }
})