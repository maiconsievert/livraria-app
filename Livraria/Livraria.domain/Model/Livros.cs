using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Livraria.Domain.Model
{
    public class Livros
    {
        
        public ObjectId _id { get; set; }

        [BsonRequired]
        public string Nome { get; set; }

        [BsonRequired]
        public string Autor { get; set; }

        [BsonRequired]
        public string Idioma { get; set; }        
        public int Paginas { get; set; }

        [BsonRequired]
        public string Isbn { get; set; }
        public string Acabamento { get; set; }

        public int Quantidade { get; set; }


    }
}
