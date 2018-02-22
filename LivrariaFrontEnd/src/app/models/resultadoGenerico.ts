export class resultadoGenericoSimples {
    erros: string[];
    sucesso: boolean;
}

export class resultadoGenerico<TResult> extends resultadoGenericoSimples {
    public resultado: TResult;
}