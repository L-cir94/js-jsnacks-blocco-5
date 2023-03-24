
/* consegna
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine. 
*/

/* strumenti: 

*/
let zucchina = [
    {
        "varietà": "pipp",
        "peso": 500,
        "lunghezza": 19
    },
    {
        "varietà": "zucchina roood",
        "peso": 300,
        "lunghezza": 15
    },
    {
        "color": "zucchina rood",
        "peso": 300,
        "lunghezza": 15
    },
        {
        "varietà": "pipp",
        "peso": 500,
        "lunghezza": 19
    },
    {
        "varietà": "zucchina roood",
        "peso": 300,
        "lunghezza": 15
    },
    {
        "color": "zucchina saad",
        "peso": 100,
        "lunghezza": 10
    },
        {
        "varietà": "pipp",
        "peso": 500,
        "lunghezza": 19
    },
    {
        "varietà": "zucchina saad",
        "peso": 100,
        "lunghezza": 10
    },
    {
        "color": "zucchina saad",
        "peso": 100,
        "lunghezza": 10
    },
        {
        "varietà": "pipp",
        "peso": 500,
        "lunghezza": 19
    },

]
let sommaLunghezza = 0
let somma = 0;
zucchina.forEach(zucchina => somma += zucchina.peso);
zucchina.forEach(zucchina => sommaLunghezza += zucchina.lunghezza);
console.log(`il peso complessivo delle zucchine è di ${somma}kg, la lunghezza totale è di ${sommaLunghezza}cm`);