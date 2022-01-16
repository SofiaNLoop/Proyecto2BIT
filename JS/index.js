window.addEventListener('load', startGallery, false);

let museum = new Museum;
museum.initializeGallery();

const artPieces = museum.getPieces();

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
    alert('HAT, CAP O GORRO: Aquí podemos englobarlos a todos. Son los términos más comunes para denominarlos de forma general. ');
}


function showByClick(){
    alert('Si lo tejemos más largo de lo normal pasa a ser un SLOUCHY O GORRO CAÍDO');
}

function showBySelect(){
    alert('Si lo tejemos más largo de lo normal pasa a ser un SLOUCHY O GORRO CAÍDO');
}

function showByPress(){
    alert('EAR FLAP O GORRO CON OREJERAS: Llevan dos solapas a los lados precisamente para eso, para cubrir las orejas. ');
}

function showByForm(){
    alert('BERET O BOINA: Gorro redondo y plano, normalmente sin visera, y a veces con un rabillo en la parte superior. ');
}
