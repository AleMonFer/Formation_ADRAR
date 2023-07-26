console.log("Exercise 1 PD - Vitesse Lumiere");

function vl(x, y ,z){
    while(10 * x > y){
        x = (y * z) % 10000;
        y = (3 * z) % 10000;
        z = (7 * z) % 10000;
    }
    console.log(x, y ,z);
}

vl(997, 312, 663);

console.log("Exercise 2 PD - Tony Stark");

function tonyCode(n1){
    let result = 0;
    for(let i = 0; i < n1; i++){
        if(i%3 == 0 || i%5 == 0){
            result += i; 
        }
    }
    return result;
}

console.log(tonyCode(1435));

console.log("Exercise 3 PD - BOOM! ");

function notBoom(nDeSerie){
    let n = nDeSerie % 1000;
    let u = (nDeSerie - n) / 1000;
    for(let i = 0; i < n; i++){
        u = u * 13;
        u = u % 1000;
    }
    return u;
}

console.log(notBoom(797114));

console.log("Exercise 4 PD - MES POMMES! ");

function mesPommes(n){
    let result = 0;
    for(let i = 1; i <= n; i++){
        if(i * i % 3 == 0){
            result += i * i;
        }
    }
    return result;
}

console.log(mesPommes(50));

console.log("Exercise 5 PD - He's trying to say something! ");

// let str = "NNEEESOOEES"
// console.log(str.length);

// for(let i = 0; i < str.length; i++){
//     if(str.charAt(i) == "N"){
        
//     } else if(str.charAt(i) == "E"){
        
//     } else if(str.charAt(i) == "S"){
        
//     } else if(str.charAt(i) == "O"){
        
//     }
// }

console.log("Exercise 6 PD - Hercule's 10th job ");

for(let b = 1; b <= 1000 ; b++ ){ 
    for(let r = b+1; r <= 1000 ; r++ ){
        for(let n = r+1; n <= 1000; n++){
            if( b+r+n < 1000 && b*r*n == 777*(b+r+n) && n < 2*b){
                console.log(b, r, n);
            }
        }
    }
}