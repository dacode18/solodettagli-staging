(function () {
    
    // Recupero le voci di menu che hanno dei sotto-menu
    let items = document.querySelector(".header__inline-menu").querySelectorAll("details");
    // Recupero il container dell'haeder
    let header = document.querySelector("sticky-header");
    
    items.forEach(item => {
        // Inizializzo ogni menu rimuovendo l'attributo open
        item.addEventListener("mouseenter", () => { 
            items.forEach(item => {
                item.removeAttribute("open");
            });

            // Attribuisco open al menu al passaggio del mouse
            item.setAttribute("open", true); 

            // Rimuovo l'attributo open se il puntatore esce al di fuori del container dell'header
            header.addEventListener("mouseleave", () => {
                item.removeAttribute("open");
            })

           
            let ulElement = item.querySelector("ul");

            // Rimuovo l'attributo open se il puntatore esce al di fuori delle voci di sotto-menu
            ulElement.addEventListener("mouseleave", () => {
                item.removeAttribute("open");
            });
            
        } );
    });

    })();