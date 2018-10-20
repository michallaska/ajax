//var pobierzDane//

const url = "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl";

//pobranie danych do przycisku "pobierz dane" przez  'get'

const mojPrzycisk = document.getElementById('get');

function pobierzDane(method, endpoint) {
    
    //tworzenie obiektu ajaksowego zapytania do serwera
    var httpReq = new XMLHttpRequest();
    
    //otwieranie połączenia ustawiając metodę oraz url
    httpReq.open (method, endpoint)
    
    //wysłanie requestu do serwera
    httpReq.send();
    
    //nasłuchuje zdarzenia readystatechange
    httpReq.addEventListener('readystatechange', function(){
        //sprawdzam readyState dla requestu oraz status odp.
        if(httpReq.readyState == 4 && httpReq.status == 200){
        //jeśli status i readyState są ok, pobieram dane i konwertuje je na JSONa
        var data= JSON.parse (httpReq.responseText);
        // tworzę strukturę html do wyświetlenia na stronie
            
        let html = `<p>UserID: ${data.userId}</p>
                    <p>UserName: ${data.userName}</p>
                    <p>UserURL: ${data.UserURL} </p>
            <hr>`; //<ht>
        //wyrzucam stworzoną strukturę HTML do dokumentu
        document.getElementById('output').innerHTML = html
        }
    })
}

//kliknięcie "Pobierz dane" -> pobranie danych do kliknięcia -> wyrzucenie danych ze stron url do strony html.

mojPrzycisk.addEventListener('click', function(){
    pobierzDane ('GET', url);
});

//podpięcie zdarzenia, które będzie wywołane po naciśnięciu na przycisk "Pobierz dane"//

//endpoint- wynik z adresu URL wyrzucony na stronie html //

//innerhtml

//Function(response)  {
//    document.getElementById
//       
//} 






