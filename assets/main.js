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
        myClass: 'saluto',
        message: 'Hello World',
    }
});

// console.log('hello');
