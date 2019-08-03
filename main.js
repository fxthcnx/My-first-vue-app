var app = new Vue({
    el: '#app',
    data: {
    'name': 'fathona',
    'food_items': ['sushi', 'ramen', 'mala'],
    },
    methods: {
        buttonClick: function(){
            alert('hi '+ this.name)
        }
    }
})
    