function emailSendPurchase(){
    console.log("Inside");

    let pianoScelto = document.getElementById("typePurchase").value;
    let senderEmail = document.getElementById("email").value;
    let senderTel = document.getElementById("telephone").value;
    let nominativo = document.getElementById("nominative").value;
    let codiceFiscale = document.getElementById("fiscalCode").value;
    let sezCatastale = document.getElementById("sezCatastale").value;
    let particella = document.getElementById("particellaInput").value;
    let foglio = document.getElementById("foglioInput").value;
    let subalterno = document.getElementById("subalternoInput").value;
    let constructionYear = document.getElementById("constructionYear").value;
    let buildingLocation = document.getElementById("buildingLocation").value;

    var messageBody = "Tipo acquisto: " + pianoScelto + 
                    "<br/>Email: " + senderEmail +
                    "<br/>Telefono: " + senderTel +
                    "<br/>Nominativo: " + nominativo + 
                    "<br/>Codice fiscale: " + codiceFiscale + 
                    "<br/>Sezione catastale: " + sezCatastale + 
                    "<br/>Particella: " + particella + 
                    "<br/>Foglio: " + foglio + 
                    "<br/>Subalterno: " + subalterno + 
                    "<br/>Anno costruzione: " + constructionYear + 
                    "<br/>Citta': " + buildingLocation;
                
    console.log(messageBody);

    Email.send({
        SecureToken : "e1dcb547-d194-4526-a7c2-900c44d4be6e",
        To : 'studioape@studioape.eu',
        From : "federicogiudici14@gmail.com",
        Subject : "Compilazione modulo acquisto",
        Body : messageBody
    }).then(
        message => {
            if(message == "OK"){
                alert("L'email e' stata inviata con successo")
            }
            else {
                alert("Problema nell'invio del form")
                console.log(message);
            }
        }
    );
}

function sendEmailContacts(){
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    var messageBody = "Nome: " + name + "<br>Cognome: " + surname +
                    "<br>Email: " + email + "<br>Messaggio: " + message;
    
    Email.send({
        SecureToken : "e1dcb547-d194-4526-a7c2-900c44d4be6e",
        To : 'studioape@studioape.eu',
        From : "federicogiudici14@gmail.com",
        Subject : "Messagio da un cliente",
        Body : messageBody
    }).then(
        message => {
            if(message == "OK"){
                alert("Il form e' stato inviato con successo")
            }
            else {
                alert("Problema nell'invio del form")
                console.log(message);
            }
        }
    );
}