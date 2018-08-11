new Vue({
	el: '#app',
    data: {
        title: 'Hello World!',
        link: 'http://google.com',
        finishedLink: '<a href="http://fb.me">Facebook</a>'
    },
    methods: {
        sayHello: function() {
            this.title = 'Hello!';
            return this.title;
        }
    }
});