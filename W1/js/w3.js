//jQuery Infinite Scroll

const url =
"https://jsonplaceholder.typicode.com/users";

const content = document.querySelector ('.content')
      
//lista użytkowników dłuższa niż wysokość okna przeglądarki

const pobierzDane = function (){
    var http = new XMLHttpRequest ();
    
    http.open('GET', url);
    
    http.send ();
    
    http.addEventListener('load', function(){
        let data = JSON.parse(http.responseText);
        
        let html ="";
        data.forEach(function (el, ind)
                     {
            let newItem =document.createElement ('div');
            newItem.setAttribute('class', 'content-item');
            let child = `<h2>${el.name}</h2>
            <h3>${el.username}</h3>
`            
        }
                    );
                    }
                    )

                    }
window.addEventListener('scroll', pobierzDane); 

