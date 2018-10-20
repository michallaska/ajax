//jQuery ButtonClick

const url =
"http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl";


//strona po załodowaniu i kliknięciu na przycisk "Pobierz dane"
//z pobranego obiektu mają zwracać dane z danego obiektu-> //obiekt JSON
//użycie funkcji GetJSON ()

const mojPrzycisk = document.getElementById('get');

function pobierzDane (endpoint){
    //za pomocą jQuery i jego wbudowanej funckji $.getJson pobieram JSONa z serwers
    
    $.getJSON (endpoint, function(result){
        
        var html = `<p>|userId: ${result.userId} </p> 
<p>| userName: ${result.userName} </p>
<p>| userURL: ${result.userURL} </p>
<hr>`; 
    // wstawiam strukturę html na stronę
document.getElementById ('output').innerHTML = html;
})
}

mojPrzycisk.addEventListener('click', function(){
    pobierzDane (url);
});