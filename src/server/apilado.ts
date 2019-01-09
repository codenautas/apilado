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

export class Backend{
    public zero:string='unnamed'
    public usuariosTD:TableDefinition={
        field:{
            usuario:{typeName:'text'}
        },
        primaryKey:['usuario']
    }
    constructor(...args:any[]){ 
        console.log('constructing...',(this.constructor||{name:'unknown class name'}).name,args);
        this.zero=args[0];
    }
    describe(){
        // @ts-ignore
        console.log('describing',(this.constructor||{name:'unknown class name'}).name,this.esUno, this.esDos, this.esTres)
    }
    async start():Promise<void>{
        console.log('started', this)
    }
}