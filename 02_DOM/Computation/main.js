new Vue({
	el: '#app',
    data: {
        counter: 0,
    },    
    computed: {
        output: function() {
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    },
    watch: {
        counter: function() {
            var vm = this;
            setTimeout(function() {
                vm.counter = 0;
            }, 5000);
        }
    },
});