using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Livraria.API
{
    public class resultadoGenerico
    {
        public string[] Erros { get; set; }
        public bool Sucesso { get; set; }
    }

    public class resultadoGenerico<TResult> : resultadoGenerico
    {
        public TResult Resultado { get; set; }
    }
}