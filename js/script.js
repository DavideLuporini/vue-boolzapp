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
                message: 'sono incinto',
            },
            {
                name: 'Samuele',
                avatar: '_3',
                message: 'ti va di uscire con me?',
            },
            {
                name: 'Luisa',
                avatar: '_4',
                message: 'da oggi sono luiso',
            },
        ],

    },
})