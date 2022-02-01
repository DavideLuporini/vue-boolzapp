console.log('hi')

var app = new Vue({
    el: '#app',
    data: {

        user: {
            name: 'Davide',
            avatar: '_io',
            message: 'io sono tuo padre',
        },
        contacts: [{
                name: 'Marco',
                avatar: '_1',
                message: 'butta la pasta',
            },
            {
                name: 'Andrea',
                avatar: '_2',
                message: 'sono incinto',
            },
            {
                name: 'federico',
                avatar: '_3',
                message: 'ti va di uscire con me?',
            },
            {
                name: 'Giorgia',
                avatar: '_4',
                message: 'da oggi sono Giorgio',
            },
            {
                name: 'Giorgia',
                avatar: '_4',
                message: 'da oggi sono Giorgio',
            },
            {
                name: 'Giorgia',
                avatar: '_4',
                message: 'da oggi sono Giorgio',
            },
            {
                name: 'Giorgia',
                avatar: '_4',
                message: 'da oggi sono Giorgio',
            },
        ],
    },
    methods: {
        getDate() {
            const currentDate = new Date().toLocaleDateString();
            return currentDate;
        },
        getHour() {
            const hours = new Date().getHours();
            const minutes = new Date().getMinutes();
            const seconds = new Date().getSeconds();
            const currentTime = `${hours}:${minutes}:${seconds}`;
            return currentTime;
        },
    },
})