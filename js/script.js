const { createApp } = Vue;

createApp({
    data() {
        return {
            randomEmails: [],
            numEmails: 10
        }
    },
    methods:{
        getRandomEmails(){
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
                    console.log(resp.data.response);
                    const emails = resp.data.response;
                    this.randomEmails.push(emails);
                });
            }
            console.log(this.newList);
        },
       
    },
    created() {
        this.getRandomEmails();
    }
}).mount('#app');
