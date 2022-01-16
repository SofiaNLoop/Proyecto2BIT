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
        let piece1 = new Piece("./IMG/gorrito1.jpg", "HAT, CAP O GORRO: Aquí podemos englobarlos a todos. Son los términos más comunes para denominarlos de forma general. ");
        let piece2 = new Piece("./IMG/gorrito2.jpg", " Si  va ajustado a la cabeza sin ningún tipo de adorno se le conoce como SKULL CAP. ");
        let piece4 = new Piece("./IMG/gorrito3.jpg", "Si lo tejemos más largo de lo normal pasa a ser un SLOUCHY O GORRO CAÍDO");
        let piece5 = new Piece("./IMG/gorrito4.jpg", "EAR FLAP O GORRO CON OREJERAS: Llevan dos solapas a los lados precisamente para eso, para cubrir las orejas. ");
        let piece3 = new Piece("./IMG/gorrito5.jpg", "BERET O BOINA: Gorro redondo y plano, normalmente sin visera, y a veces con un rabillo en la parte superior. ");
        
        this.pieces.push( piece1 );
        this.pieces.push( piece2 );
        this.pieces.push( piece3 );
        this.pieces.push( piece4 );
        this.pieces.push( piece5 );
    }
}