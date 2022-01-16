class Museum{
    constructor(){
        this.pieces = [];
    }

    getPieces(){
        return this.pieces;
    }

    setPieces(){
        return this.pieces;
    }

    initializeGallery(){
        let piece1 = new Piece("./IMG/gorrito1.jpg", "El Retrato de Lisa Gherardini, esposa de Francesco del Giocondo,1​ más conocido como La Gioconda (La Joconde en francés) o Monna Lisa, es una obra pictórica del polímata renacentista italiano Leonardo da Vinci. Fue adquirida por el rey Francisco I de Francia a comienzos del siglo XVI y desde entonces es propiedad del Estado francés. Se halla expuesta en el Museo del Louvre de París, siendo, sin duda, la «joya» de sus colecciones.");
        let piece2 = new Piece("./IMG/gorrito2.jpg", "El Retrato de Lisa Gherardini, esposa de Francesco del Giocondo,1​ más conocido como La Gioconda (La Joconde en francés) o Monna Lisa, es una obra pictórica del polímata renacentista italiano Leonardo da Vinci. Fue adquirida por el rey Francisco I de Francia a comienzos del siglo XVI y desde entonces es propiedad del Estado francés. Se halla expuesta en el Museo del Louvre de París, siendo, sin duda, la «joya» de sus colecciones.");
        let piece4 = new Piece("./IMG/gorrito3.jpg", "El Retrato de Lisa Gherardini, esposa de Francesco del Giocondo,1​ más conocido como La Gioconda (La Joconde en francés) o Monna Lisa, es una obra pictórica del polímata renacentista italiano Leonardo da Vinci. Fue adquirida por el rey Francisco I de Francia a comienzos del siglo XVI y desde entonces es propiedad del Estado francés. Se halla expuesta en el Museo del Louvre de París, siendo, sin duda, la «joya» de sus colecciones.");
        let piece5 = new Piece("./IMG/gorrito4.jpg", "El Retrato de Lisa Gherardini, esposa de Francesco del Giocondo,1​ más conocido como La Gioconda (La Joconde en francés) o Monna Lisa, es una obra pictórica del polímata renacentista italiano Leonardo da Vinci. Fue adquirida por el rey Francisco I de Francia a comienzos del siglo XVI y desde entonces es propiedad del Estado francés. Se halla expuesta en el Museo del Louvre de París, siendo, sin duda, la «joya» de sus colecciones.");
        let piece3 = new Piece("./IMG/gorrito5.jpg", "El Retrato de Lisa Gherardini, esposa de Francesco del Giocondo,1​ más conocido como La Gioconda (La Joconde en francés) o Monna Lisa, es una obra pictórica del polímata renacentista italiano Leonardo da Vinci. Fue adquirida por el rey Francisco I de Francia a comienzos del siglo XVI y desde entonces es propiedad del Estado francés. Se halla expuesta en el Museo del Louvre de París, siendo, sin duda, la «joya» de sus colecciones.");
        
        this.pieces.push( piece1 );
        this.pieces.push( piece2 );
        this.pieces.push( piece3 );
        this.pieces.push( piece4 );
        this.pieces.push( piece5 );
    }
}