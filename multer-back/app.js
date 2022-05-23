import express, { json } from "express";
import cors from "cors";
import multer from "multer";


const app = express();
app.use(cors());
app.use(json());

const upload = multer({ dest: 'uploads/' })


// multer

app.post("/upload", upload.single("file"),function(req, res, next){
    console.log(req.file);
    res.status(200).send(req.file)
})



app.listen(5001, () =>
  console.log(`Servidor em pé na porta 5001`)
);