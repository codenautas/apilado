import * as AppApliado from "./app-apilado";

function emergeAppEjemplo<T extends AppApliado.Constructor<AppApliado.AppApilado>>(Base:T){
    return class AppEjemplo extends Base{
        constructor(...args:any[]){ 
            super(args);
        }
    }
}

var AppEjemplo = emergeAppEjemplo(AppApliado.AppApilado)

var app = new AppEjemplo();

app.start();