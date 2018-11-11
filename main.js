window.onload = function() {

    document.addEventListener("click", function(evt) {
        var searchbar = document.getElementById ('searchbar');
        var targetElement = evt.target;
    
        do {
            if (targetElement == searchbar) {
                document.getElementById("search_menu").classList.add("active");
                return;
            }
            targetElement = targetElement.parentNode;
        } while(targetElement); //sous-entend que targetElement != null
    
        document.getElementById("search_menu").classList.remove("active");
    })

    document.querySelector(".right_arrow").addEventListener("click", function(evt) {
        let carousel = this.parentNode;
        let index = parseInt (carousel.getAttribute("data-index"));
        //index servira de multiplicateur au décalage (sans lui, le carousel ne se déplace que d'une valeur)
        //parseInt convertit un string en nombre (tout ce qui est dans un doc html est un string à la base)
        if (index+1 < carousel.querySelectorAll(".carousel_content a").length - 4) // il faut soustraire 4 et non 5 car on va de 1 à 9 (sur un total de 10 index)
        {
            index++; //quand on clique, il fait ++
            carousel.querySelector(".carousel_content").style.transform = "translateX("+(index*-260)+"px)"; //en même temps, il décale
            carousel.setAttribute("data-index", index); //il change l'attribut dans le html
        }
    })
    
}