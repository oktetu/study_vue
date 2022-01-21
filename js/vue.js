Vue.config.devtools = true;

const feature = new Vue({
    el: '#sec1',
    data() {
        return {
            text: '岡本哲哉',
            description: ''
        }
    },
    methods: {
        handleClick() {
            this.text = '大西凛';
        }
    }
})