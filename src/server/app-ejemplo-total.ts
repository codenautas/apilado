import * as AppApliado from "./app-apilado";

// function emergeAppEjemplo(Base:typeof AppApliado){
function emergeAppEjemplo<T extends typeof AppApliado>(Base:T){
    class AppEjemplo extends Base.AppApilado{
        constructor(...args:any[]){ 
            console.log('eje1',args)
            super(args);
            console.log('eje2',args)
        }
    }
    return {...Base, AppApilado:AppEjemplo};
}

var AppEjemplo=emergeAppEjemplo(AppApliado)

var app = new AppEjemplo.AppApilado('x');

app.start();