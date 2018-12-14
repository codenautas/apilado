import {AppApilado, Constructor, TableDefinition} from "./app-apilado";
export {Constructor};

export function emergeAppExample<T extends Constructor<AppApilado>>(Base:T){
    return class AppExample extends Base{
        constructor(...args:any[]){ 
            super(args);
            this.usuariosTD.field.rol={typeName:'text'};
        }
        rolesTD:TableDefinition={
            field:{
                rol:{typeName:'text'},
            },
            primaryKey:['rol']
        }
    }    
}

export class AppExample extends emergeAppExample(AppApilado){}

