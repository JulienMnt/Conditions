/**           CONDITION
 * declarer trois variable a=4,b=4,c=3
 * 
 * a sera l expression de reference 
 * si a est egal a b alor faire un console log('egal à b')
 * 
 * si a est egal a c alors faire un console log('egal à b')
 * 
 * par defaut il y a un console log("egal a rien")
 */
"use strict";

let a = 4;
let b = 4;
let c = 3;

if (a==b){
    console.log("Egal a b");
}
else if (a == c){
    console.log("Egal a c");
}
else{
    console.log("Egal a rien");
}
