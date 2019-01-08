import * as AppApliado from "./apilado";

// function emergeAppEjemplo(Base:typeof AppApliado){
function emergeEjemplo1<T extends typeof AppApliado>(Base:T){
    class Backend extends Base.Backend{
        constructor(...args:any[]){ 
            console.log('eje1',args)
            super(...args);
            console.log('eje2',args)
        }
        get esUno(){ return true };
    }
    return {...Base, Backend};
}

// function emergeAppEjemplo2(Base:typeof AppApliado){
function emergeEjemplo2<T extends typeof AppApliado>(Base:T){
    class Backend extends Base.Backend{
        constructor(...args:any[]){ 
            console.log('EJE1',args)
            super(...args);
            console.log('EJE2',args)
        }
        get esDos(){ return true };
    }
    return {...Base, Backend};
}

var AppEjemplo1=emergeEjemplo1(AppApliado)
var AppEjemplo2=emergeEjemplo2(AppApliado)

var app1 = new AppEjemplo1.Backend('1');
var app2 = new AppEjemplo2.Backend('2');

app1.start();
app1.describe();
console.log('app1',app1.esUno,app1.esDos) // ok: esDos err!
app2.start();
app2.describe();
console.log('app2',app2.esUno,app2.esDos) // ok: esUno err!

var AppEjemplo12 = emergeEjemplo2(emergeEjemplo1(AppApliado))
var app12 = new AppEjemplo12.Backend('12');

app12.start();
console.log('app12',app12.esUno,app12.esDos,app12.esTres); // Ok: esTres err!
app12.describe();

