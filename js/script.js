const { createApp } = Vue;

createApp({
    data() {
        return {
            randomEmail: [],
            numEmails: 10
        }
    },
    methods:{
        getRandomEmail(){
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
                    console.log(resp.data.response);
                    const emails = resp.data.response;
                    this.randomEmail.push(emails);
                });
            }
            console.log(this.newList);
        },
       
    },
    created() {
        this.getRandomEmail();
    }
}).mount('#app');
