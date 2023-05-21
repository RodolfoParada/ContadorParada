const {
    createApp
} = Vue;


createApp({
    data() {
        return {
            contador: 0,
            reset: 0,
        }
    },
    created() {},
    methods: {
        ascendente() {
            this.contador++
        },
        descendente() {
            this.contador--
        },
    },
    computed: {}
}).mount("#app")