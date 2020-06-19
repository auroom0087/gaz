<template> 
	<v-app> 
        <MainLayout />
    </v-app>
</template>

<script> 
import MainLayout from './views/MainLayout.vue'
import store from './store.js'
    export default {
        created() {
            if(!localStorage.getItem('user')) {
                this.$router.push({ name: 'login' })
            }
        },
        components: {
            MainLayout
        }
    }
</script>