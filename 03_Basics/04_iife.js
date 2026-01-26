// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// to safeguard the function from the pollution of global scope we use iife
(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
}) ();


( (name) => {
    // SIMPLE IIFE
    console.log(`DB CONNECTED TO ${name}`);
} )("TWINKLE");

