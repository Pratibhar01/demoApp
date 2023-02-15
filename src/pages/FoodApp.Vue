<script>
import Header from "../components/Header.vue"

export default{
    components: {Header},

    mounted(){
        console.log(this.$router.currentRoute)
        console.log("Food App is  mounted")
    },
    unmounted(){
        console.log("Food App is unmounted")
    },
    beforeUnmount(){
        console.log("Food App will unmounted")
    }
}
</script>
<template>
   <Header>
   <span>
        Foodtuck
    </span>
    </Header>
</template>