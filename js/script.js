const {createApp} = Vue;

createApp({
    data(){
        return {
            randomEmail: null
        }
    },
    methods:{
        getRandomEmail(){
            axios.get()
        }
    }
}).mount('#app');