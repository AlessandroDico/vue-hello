// COME INIZIARE AD USARE VUE?
//BISOGNA CREARE UNA VARIABILE APP CON VALORE NEW VUE ({});
//ALL'INTERNO CI VA UNA CHIAVE EL: E UN VALORE '#ROOT'
//L'ID ROOT VA MESSO NELL HTML COME ID DI UN DIV CON ALL'INTERNO TUTTO QUELLO CHE DEVE ESSERE COLLEGATO A VUE
//CI SONO ALCUNE "VARIABILI" DA INSERIRE ALL'INTERNO DELLA VARIAVILE APP
//DATA : PER METTERE I DATI IN VUE
//METHOD: PER METTERE LE FUNZIONI IN VUE

// ---------esercizio----------
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data

var app = new Vue({
    el: '#root',
    data : {
        myClass: 'autumn',
        message: 'Autumn',
        myImage: 'https://dutchreview.com/wp-content/uploads/autumn-in-the-Netherlands-by-@dialoner-1.jpg',
    },
    methods: {
        myFunction() {
            if (this.myClass == 'autumn') {
                this.myClass = 'winter';
                this.message = 'Winter';
                this.myImage = 'https://www.chaptertravel.com/wp-content/uploads/2018/11/winter-in-the-Netherlands.jpeg';
            } else if (this.myClass == 'winter'){
                this.myClass = 'spring';
                this.message = 'Spring';
                this.myImage = 'https://www.dutchieshostel.com/wp-content/uploads/2018/04/lente-achtergrond-met-een-veld-met-verschillende-kleuren-tulpen-en-een-molen-ergens-in-nederland-648x405.jpg';
            } else if (this.myClass == 'spring'){
                this.myClass = 'summer';
                this.message = 'Summer';
                this.myImage = 'https://image.freepik.com/free-photo/famous-windmills-kinderdijk-village-holland_136401-1315.jpg';
            }  else if (this.myClass == 'summer'){
                this.myClass = 'autumn';
                this.message = 'Autumn';
                this.myImage = 'https://dutchreview.com/wp-content/uploads/autumn-in-the-Netherlands-by-@dialoner-1.jpg';
            }
        }
    }
});

// console.log('hello');
// var app = new Vue(
//     {
//         el: '#root',
//         data: {
//             messaggio: 'Hello world!',
//             coloreTitolo: 'rosso',
//         },
//         methods: {
//             cambiaColore() {
//                 if(this.coloreTitolo == 'rosso') {
//                     // se il colore attuale è rosso => lo imposto a blu
//                     this.coloreTitolo = 'blu';
//                 } else {
//                     // se il colore attuale è blu => lo imposto a rosso
//                     this.coloreTitolo = 'rosso';
//                 }
//             }
//         }
//     }
// );
