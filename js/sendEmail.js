function emailSend(){
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
        To : 'contacts@digitalstorm.site',
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