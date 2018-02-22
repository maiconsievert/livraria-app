using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB;
using MongoDB.Bson;
using MongoDB.Driver.Linq;
using MongoDB.Driver;
using MongoDB.Driver.Core;
using System.Configuration;
using Livraria.Domain.Model;

namespace Livraria.Repository
{

    public class LivrosRep : MongoHelper<Livros>
    {
        
        public LivrosRep()
        {
        
            
        }

        public IEnumerable<Livros> Lista()
        {
            return this.Collection.AsQueryable<Livros>();
        }

        public Livros Item(string id)
        {
            var objid = new ObjectId(id);
            return this.Collection.Find<Livros>(x => x._id == objid).FirstOrDefault();
        }

        public void Adicionar(Livros obj)
        {
            this.Collection.InsertOne(obj);
        }

        public void Editar(string id, Livros obj)
        {
            var objid = new ObjectId(id);
            
            this.Collection.FindOneAndUpdate<Livros>(x => x._id == objid, 
                Builders<Livros>.Update
                    .Set("Nome", obj.Nome)
                    .Set("Autor", obj.Autor)
                    .Set("Idioma", obj.Idioma)
                    .Set("Paginas", obj.Paginas)
                    .Set("Isbn", obj.Isbn)
                    .Set("Acabamento", obj.Acabamento)
                    .Set("Quantidade", obj.Quantidade)
            );

        }

        public void Excluir(string id)
        {
            var objid = new ObjectId(id);
            this.Collection.DeleteOne(x => x._id == objid);
        }

    }

}
