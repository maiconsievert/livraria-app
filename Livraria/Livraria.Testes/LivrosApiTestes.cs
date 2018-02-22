using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using Livraria.Domain.Model;
using Livraria.Repository;
using Livraria.Util;

namespace Livraria.Testes
{
    [TestFixture]
    public class LivrosApiTestes
    {


        [Test]
        public void Livro_Id_Hexadecimal()
        {
            string id = "5a8e1c8d948cd23b6081bc55";

            bool retorno = Validacoes.StringHexadecimal(id);

            Assert.AreEqual(true, retorno);
        }

        [Test]
        public void Livro_Id_Length24()
        {
            string id = "5a8e1c8d948cd23b6081bc55";

            bool retorno = (id.Length == 24);

            Assert.AreEqual(true, retorno);
        }

    }

}
