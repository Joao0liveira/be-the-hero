const express = require('express');
const app = express();


app.get('/',(req, res)=>{
    return res.json(
        {
            evento:"Semana OmniStacck",
            aluno:"Joao"    

        })
});





app.listen(3333);
