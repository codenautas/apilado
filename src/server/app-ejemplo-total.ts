import * as AppApliado from "./app-apilado";

// function emergeAppEjemplo(Base:typeof AppApliado){
function emergeAppEjemplo<T extends typeof AppApliado>(Base:T){
    class AppApilado extends Base.AppApilado{
        constructor(...args:any[]){ 
            console.log('eje1',args)
            super(...args);
            console.log('eje2',args)
        }
        get esUno(){ return true };
    }
    return {...Base, AppApilado:AppApilado};
}

// function emergeAppEjemplo2(Base:typeof AppApliado){
function emergeAppEjemplo2<T extends typeof AppApliado>(Base:T){
    class AppApilado extends Base.AppApilado{
        constructor(...args:any[]){ 
            console.log('EJE1',args)
            super(...args);
            console.log('EJE2',args)
        }
        get esDos(){ return true };
    }
    return {...Base, AppApilado:AppApilado};
}

var AppEjemplo1=emergeAppEjemplo(AppApliado)
var AppEjemplo2=emergeAppEjemplo2(AppApliado)

var app1 = new AppEjemplo1.AppApilado('1');
var app2 = new AppEjemplo2.AppApilado('2');

app1.start();
app1.describe();
console.log('app1',app1.esUno,app1.esDos) // ok: esDos err!
app2.start();
app2.describe();
console.log('app2',app2.esUno,app2.esDos) // ok: esUno err!

var AppEjemplo12 = emergeAppEjemplo2(emergeAppEjemplo(AppApliado))
var app12 = new AppEjemplo12.AppApilado('12');

app12.start();
console.log('app12',app12.esUno,app12.esDos,app12.esTres); // Ok: esTres err!
app12.describe();

