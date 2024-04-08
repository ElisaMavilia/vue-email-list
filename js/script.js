const { createApp } = Vue;

createApp({
    data() {
        return {
            randomEmails: [], //variabile con array vuoto
            numEmails: 10, //stabilisco la lunghezza dell'array
            loading: false //inizializzo variabile loading a false
        }
    },
    methods: {
        getRandomEmails() { //funzione per creare l'email random
            this.loading = true;
            const list = []; //array vuoto in cui verranno pushati gli elementi tutti in una volta
            for (let i = 0; i < this.numEmails; i++) { //la chiamata ad Axios va fatta all'interno del ciclo for per reiterare 10 volte (numEmails)
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
                    console.log(resp.data.response);
                    const email = resp.data.response; //creo una variabile con la chiave response che contiene l'email random
                    list.push(email); // pusho l'email random dentro l'array
                    this.loading = false; //per mostrare la lista, loading deve tornare false
                    if (i === this.numEmails - 1) { // condizione che controlla se l'indice corrisponde alla lunghezza preimpostata meno 1 (in quanto l'indice parte da zero)
                        this.randomEmails = [...list]; //con lo spread si crea la copia di dell'oggetto list
                    }
                });
            }
            console.log(this.randomEmails);
        }
    },
    created() {
        this.getRandomEmails();
    }
}).mount('#app');
