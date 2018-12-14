export type Constructor<T> = new(...args: any[]) => T;

export type FieldDefinition={
    typeName:'text'|'integer'
}
export type TableDefinition={
    field:{[key:string]:FieldDefinition}
    primaryKey:[string]
}

export class Table{

}

export class AppApilado{
    public usuariosTD:TableDefinition={
        field:{
            usuario:{typeName:'text'}
        },
        primaryKey:['usuario']
    }
    async start():Promise<void>{
        console.log('started', this)
    }
}