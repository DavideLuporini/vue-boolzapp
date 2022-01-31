console.log('hi')

var app = new Vue({
    el: '#app',
    data: {

        user: {
            name: 'Nome Utente',
            avatar: '_io'
        },
        contacts: [{
                name: 'Michele',
                avatar: '_1',
                message: 'butta la pasta',
            },
            {
                name: 'Fabio',
                avatar: '_2',
                message: 'butta la pasta',
            },
            {
                name: 'Samuele',
                avatar: '_3',
                message: 'butta la pasta',
            },
            {
                name: 'Luisa',
                avatar: '_4',
                message: 'butta la pasta',
            },
        ],

    },
})