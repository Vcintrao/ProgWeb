const express = require("express");
const app = express();
app.use(express.json());

//Permissões
 var cors = require('cors');
 app.use(cors());

 //Porta que estou ouvindo

 app.listen(process.env.PORT || 3000);

 app.get('/', function (req, res){
        res.send("Hello World and Vitor :)");
     }
 ); 

let mensagens = [
    {
        nome: "Rafaela Yoko", apelido: "Rafa", aniversario:"01/11/1999", materia_favorita:"Circuitos Elétricos 1", jogo:"It Takes Two"
    }
];

app.get('/mensagens',
    function(req, res){
        // res.send(mensagens);
        res.send(mensagens.filter(Boolean));
    } 
);

app.get('/mensagens/:id',
    function(req, res){
        let id = req.params.id - 1;
        let mensagem = mensagens[id];
        
        if (!mensagem){
            res.send("Mensagem não encontrada");
        } else {
            res.send(mensagem);
        }
    }
)

app.post('/mensagens', 
    (req, res) => {
        console.log(req.body);
        let mensagem = req.body;
        mensagens.push(mensagem);
        res.send("criar uma mensagem.")
    }
);

app.put('/mensagens/:id',
    (req, res) => {
        let id = req.params.id - 1;
        let mensagem = req.body;
        mensagens[id] = mensagem;        
        res.send("Mensagem atualizada com sucesso.")
    }
)

app.delete('/mensagens/:id', 
    (req, res) => {
        let id = req.params.id - 1;
        delete mensagens[id];

        res.send("Mensagem removida com sucesso");
    }
);