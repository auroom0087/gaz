<template> 
		<v-app> 
      <Home />
    </v-app>
</template>

<script> 
import Home from './components/Home.vue'
import store from './store.js'
 export default {
  components: {
      Home
  }
  }
</script>
