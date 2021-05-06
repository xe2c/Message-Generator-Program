// Place this piece of code at beginning of each js file:
// @ts-check    // Makes VSCode checking for mistakes

const randomMessage = () => {
    var rndm = Math.floor(Math.random()*3);
    console.log(rndm);
    switch (rndm) {		
        case 0:	
            return ('Message A');
            break;
        case 1:	
            return ('Message B');
            break;
        case 2:	
            return ('Message C');
            break;
        default:	
            return ('Lazy Day');
    }		

};

console.log(randomMessage());

