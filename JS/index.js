window.addEventListener('load', startGallery, false);

let museum = new Museum;
museum.initializeGallery();

const beniePieces = museum.getPieces();



function startGallery(){
    let ob=document.getElementById('button-start');
    ob.addEventListener('click',exploreMuseum,false);

    
};

function exploreMuseum(){
    let ob = document.getElementById('explore-museum');
    ob.innerHTML = 
    '<section class="sec-gallery">'+
    '<h2>Pasa el cursor sobre la imagen para ver la descripción</h2>'+
    '<img onmouseenter="showByMouseEnter(this)" src="img/gorrito1.jpg" alt="Gorro 1">'+
    '</section>'+
    
    '<section class="sec-gallery">'+
    '<h2>Haz clic en el botón para ver la descripción</h2>'+
    '<img src="img/gorrito2.png" alt="Gorro 2">'+
    '<button onclick="showByClick()">Haz Clic</button>'+
    '</section>'+

    '<section class="sec-gallery">'+
    '<div>'+
    '<h2>Selecciona una parte del texto para ver la descripción:  </h2>'+
    '<input type="text" value="Ver Descripción" onselect="showBySelect()">'+
    '</div>'+
    '<img src="img/gorrito3.jpg"" alt="Gorro 3">'+
    '</section>'+

    '<section class="sec-gallery">'+
    '<div>'+
    '<h2>Escribe cualquier letra dentro del recuadro para ver la descripción: </h2>'+
    '<input type="text" onkeypress="showByPress()">'+
    
    '</div>'+
    
    '<img src="img/gorrito4.jpg"" alt="Gorro 4">'+
    '</section>'+

    '<section class="sec-gallery">'+
    '<h2>Rellena el formulario para ver la descripción </h2>'+
    '<img id="img5" src="img/gorrito5.jpg"" alt="Gorro 5">'+
    '<form onsubmit="showByForm()">'+
    '¿Deseas ver la descripción?: <input type="text">'+
    '<input type="submit">'+
    '</form>'+
    '</section>'
}

function showByMouseEnter(){
    alert( beniePieces[0].getDescription() );
}


function showByClick(){
    alert( beniePieces[1].getDescription() );
}

function showBySelect(){
    alert( beniePieces[2].getDescription() );
}

function showByPress(){
    alert( beniePieces[3].getDescription() );
}

function showByForm(){
    alert( beniePieces[4].getDescription() );
}
