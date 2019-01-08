import * as AppApliado from "./apilado";

function emergeAppEjemplo<T extends AppApliado.Constructor<AppApliado.Backend>>(Base:T){
    return class AppEjemplo extends Base{
        constructor(...args:any[]){ 
            super(args);
        }
    }
}

var AppEjemplo = emergeAppEjemplo(AppApliado.Backend)

var app = new AppEjemplo();

app.start();