<template>
    <div class="toast-wrapper">
        <transition-group name="toast">
        <div class="toast" v-for="toast in toasts" :class="toast.type" :key="toast.uuid">
            <h5>{{ toast.msg }}</h5>
            <button @click="deleteToast" class="alert-button"><span class="icon">&times;</span></button>
        </div>
        </transition-group>
    </div>
</template>

<script>
    import { computed } from 'vue'
    import { useStore } from 'vuex';
export default {
    name: 'ToastUI',
    setup () {
    const store = useStore()
    const toasts = computed(() => store.state.alert.messages);
    return {
        toasts, 
    }
  },  
    methods: {
        deleteToast(toast) {
            // console.log(toast);
            this.$store.dispatch('alert/remove', toast);
        }
    }
}
</script>

<style lang="scss" scoped>
.toast-wrapper {
    position: fixed;
    top: 0;
    bottom: 16px;
    left: 0;

    .toast {
        background-color: rgb(233, 233, 233);
        padding: 4px 0 4px 4px;
        margin-left: 8px;
        display: flex;
        justify-content: space-between;
        column-gap: 8px;
        align-items: center;
        color: white;
        width: 300px;
        & + .toast {
            margin: 8px;
        }
        h5 {
            margin: 0;
            font-weight: 400;
            flex: 1 1 auto;
        }

        .alert-button {
            border: 0;
            line-height: 0;
            background: transparent;
            padding: 0;
            margin-right: 0;

         .icon {
                font-size: 18px;
            }
        }
      

        &.info {
            background-color: #54bbd2;
        }

        &.warn {
            background-color: #e8b309;
        }

        &.error {
            background-color: #d35b09;
        }

        &.success {
            background-color: #2fb246;
        }

    
    }
}

/* transition effects   */
.toast {
    &-enter {
        transform: translateX(-100%);
        opacity: 0;
    }

    &-enter-active {
        transition: transform 0.3s ease opacity 0.1s ease;
    }

    &-enter-to {
        transform: translateX(0%);
        opacity: 1;
    }

    &-leave {
        transform: translateX(0%);
    }

    &-leave-active {
        transition: transform 0.3s ease opacity 0.1s ease;
    }

    &-leave-to {
        transform: translateX(-100%);
    }
}
</style>