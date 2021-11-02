var AWS = require('aws-sdk');
const fs = require('fs');
const s3 =new AWS.S3({
    accessKeyId:"AKIAT4U6BRVSXWZZEYHY",
    secretAccessKey:"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"
});

// s3.listBuckets({}, (err, data) =>{
//     if(err) throw err;
//     console.log(data);
// });
// var params ={
//     Bucket: 'bucket-onboarding'
// }
// s3.listObjectsV2(params, (err, data)=>{
//     if(err) throw err;
//     console.log(data);
// }) 
//Se necesitan dos cosas, el buvket donde el objeto esta y la dirección el path del objeto

// var parametrosGetObject={
//     Bucket: 'bucket-onboarding',
//     Key: 'google.png'
// }
// s3.getObject(parametrosGetObject, (err,data) => {
//     if(err) throw err;
//     console.log(data);
//     fs.writeFile("ImagenS3.png", data.Body, 'binary', (err) => {
//         if(err) throw err;
//         console.log("Imagen guardada en el disco.");
//     })
// }) // para descargar un objeto de  los bucket que estan en s3

fs.readFile('Información.txt' , (err, data)=>{
    if(err) throw err;
    var paramesPutObject ={
        Bucket: 'bucket-onboarding',
        Key: 'Información.txt',
        Body: data//la data del archivo
    }

    s3.putObject(paramesPutObject, (err,data)=>{
        if(err) throw err;
        console.log(data);
    })
})