using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Livraria.Domain.Model;
using Livraria.Repository;
using Livraria.Util;
using System.Xml.Linq;

namespace Livraria.API.Controllers
{

    [Route("api/livros")]
    public class LivrosController : ApiController
    {

        private LivrosRep rep;

        public LivrosController()
        {
            rep = new LivrosRep();
        }

        public IEnumerable<Livros> Get()
        {
            
            return rep.Lista().OrderBy(x => x.Nome);
            
        }

        [Route("api/livros/{id}")]
        public Livros Get(string id)
        {
            Livros retorno;

            if (!Validacoes.StringHexadecimal(id))
                return null;

            if (id.Length != 24)
                return null;

            retorno = rep.Item(id);
            
            return retorno;
        }
        
        [HttpPost]
        public Livros Post([FromBody]Livros livro)
        {
            rep.Adicionar(livro);

            return livro;

        }

        [Route("api/livros/{id}")]
        [HttpPut]
        public void Put(string id, [FromBody]Livros livro)
        {

            if (!Validacoes.StringHexadecimal(id))
                return;

            if (id.Length != 24)
                return;

            rep.Editar(id, livro);

        }

        [Route("api/livros/{id}")]
        [HttpDelete]
        public void Delete(string id)
        {

            if (!Validacoes.StringHexadecimal(id))
                return;

            if (id.Length != 24)
                return;

            rep.Excluir(id);
            

        }


    }

    

}
