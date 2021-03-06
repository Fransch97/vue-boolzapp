const app = new Vue({
    el: "#app",

    data:{
        // bootzapp
        contacts:[
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novit???',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],
        //END bootzapp
        clickedChat : 0,
        inputSms:{
            date: '',
            message: '',
            status: 'sent'

        },
        search :"",
        hideChevron: false,
        bot: [
            "Ottimo!", 
            "Ma non mi dire ",
            "Grande",
            "Come stai ?",
            "Ciao!",
            "Va bene'",
            "Perch?? no..." ,
            "Scusami ora non ho tempo ti scrivo dopo",
            "Sono a lavoro ti richiamo!", 
            "mamma mia"]

    },
    

    methods: {
        sendSms(){
            const date = new Date()
            //get the time 
            let s = date.getSeconds()
            let m = date.getMinutes()
            let h = date.getHours()
            //set time 
            if(s<10){ s = "0"+s}
            if(m<10){ m = "0"+m}
            if(h<10){ h = "0"+h}

            console.log(h,m)

            //get date
            let day = date.getDay()
            let mounth = date.getMonth()
            let year = date.getFullYear()
            if(day<10){ day = "0"+day}
            if(mounth<10){ mounth = "0"+mounth}

            //clone
            const topush = {...this.inputSms}
            topush.date = day + "/" + mounth + "/" + year + " " + h + ":" + m +":" + s
            this.contacts[this.clickedChat].messages.push(topush)
            this.inputSms.message = ""

            const sendSmS = new Audio('effects/send-sms.mp3')
            sendSmS.play()
            setTimeout(()=>{this.botsmsers()}, 2000)

        },

        deletes(index){
            console.log(index)
            console.log(this.clickedChat)
            if(confirm("Vuoi cancellare il messaggio?"))this.contacts[this.clickedChat].messages.splice(index,1)
        },

        botsmsers(){
            const date = new Date()
            //get the time 
            let s = date.getSeconds()
            let m = date.getMinutes()
            let h = date.getHours()
            //set time 
            if(s<10){ s = "0"+s}
            if(m<10){ m = "0"+m}
            if(h<10){ h = "0"+h}

            console.log(h,m)

            //get date
            let day = date.getDay()
            let mounth = date.getMonth()
            let year = date.getFullYear()
            if(day<10){ day = "0"+day}
            if(mounth<10){ mounth = "0"+mounth}

            const frase = Math.floor(Math.random()*this.bot.length)


            const messageFromBot = {
                    date: day + "/" + mounth + "/" + year + " " + h + ":" + m +":" + s,
                    message: this.bot[frase],
                    status: 'received'
            }
            this.contacts[this.clickedChat].messages.push(messageFromBot)
            const recivedSmS = new Audio('effects/recived-sms.mp3')
            recivedSmS.play()

        }

       
    },

    mounted() {
        console.log("im working")
        const date = new Date()
        console.log(date.getFullYear())
        console.log(this.search)

            // this.contacts[this.clickedChat].messages.splice(1,1)
            
    },
})