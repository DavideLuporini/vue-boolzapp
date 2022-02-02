console.log('hi')

dayjs.extend(dayjs_plugin_customParseFormat);

var app = new Vue({
    el: '#app',
    data: {

        currentContact: 0,
        newMessage: '',
        search: '',

        user: {
            name: 'Davide',
            avatar: '_io'
        },
        contacts: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Ambrogio',
                avatar: '_5',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Sara',
                avatar: '_6',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luigi',
                avatar: '_7',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Babbo',
                avatar: '_8',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },


        ],
    },
    methods: {


        // # methods to determinate Time

        getDate() {
            const currentDate = new Date().toLocaleDateString();
            return currentDate;
        },
        getHour() {
            const hours = new Date().getHours();
            const minutes = new Date().getMinutes();
            const currentTime = `${hours}:${minutes}`;
            return currentTime;
        },

        // Methods for interactions

        isActive(index) {
            return index === this.currentContact
        },
        actualContact(index) {
            this.currentContact = index;
        },

        sendMessage() {
            const newMessage = this.newMessage.trim();
            if (newMessage) {
                const newMessageObject = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: newMessage,
                    status: 'sent'
                }
                this.contacts[this.currentContact].messages.push(newMessageObject);
            }
            this.newMessage = '';

            setTimeout(() => {

                const answer = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: "Ok",
                    status: "received",
                };
                this.contacts[this.currentContact].messages.push(answer);

            }, 3000);
        },

        //    filtro alla ricerca
        searchContact() {
            filteredContacts = [];
            const search = this.search.toLowerCase();
            filteredContacts.push(search)

            this.contacts.forEach((element) => {
                element.visible = false;
                const string = element.name.toLowerCase();

                if (filteredContacts.every((item) => string.includes(item))) {
                    element.visible = true;
                }
            });
        },

        // display last message in contacts
        lastMessage() {
            let lastItem = this.contacts[this.currentContact].messages;
            let lastItemReal = lastItem.length - 1;
            let textDisplayed = this.contacts[this.currentContact].messages[lastItemReal].text;
            console.log(lastItem);
            console.log(textDisplayed);
            console.log(lastItemReal);
            console.log(this.currentContact)
        }
    },
})