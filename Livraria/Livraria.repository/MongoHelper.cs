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

namespace Livraria.Repository
{
    public class MongoHelper<T> where T : class
    {
        public IMongoCollection<T> Collection { get; private set; }

        private static string _connectionString = ConfigurationManager.ConnectionStrings["MongoDB"].ToString();
        
        public MongoHelper()
        {
            string _connectionString = ConfigurationManager.ConnectionStrings["MongoDB"].ConnectionString;
            string _databaseName = MongoUrl.Create(_connectionString).DatabaseName;

            var server = new MongoClient();
            
            var db = server.GetDatabase(_databaseName);
            Collection = db.GetCollection<T>(typeof(T).Name.ToLower());
        }

    }
}
