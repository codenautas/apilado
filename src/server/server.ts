import {AppApilado} from "./app-apilado";
import {AppExample, Constructor} from "./app-example";

var app = new AppExample();
app.start();

type Props<T, K extends keyof any[]> = T[K];  // {[key: K]: T};

type GetProp<T, K extends string> = T extends {[key: string]: infer U} ? U : never;

class ClassName{
    public c:number;
}

type TypeName={
    c2:number
}

var _tc: ClassName;
var _tn: TypeName;

var t1: typeof _tc.c;
var t2: typeof _tn.c2;

var t3:GetProp<ClassName, "c">;

console.log(t1, t2, t3);

var x : AppExample
x.rolesTD
