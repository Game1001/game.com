const fs = require("fs");
const path = require("path");

let b = document.querySelector("#btn");
let files = document.querySelector("#Allfile");
let f_num = 0;

function reFileName(oldPath, newPath){
      fs.rename(oldPath,newPath,(err) => {
            if(err){
                  throw err;
            }
      });
}

b.onclick = () => {
      let f = fs.readdirSync(files);
      f.forEach((a_f) => {
            if (fs.statSync(files.value+"/"+a_f).isFile()) {
                 reFileName(`${files.value}/${a_f}`,`${files.value}/${(++f_num)}000${path.extname(a_f)}`,(err) => {
                       if(err){throw err;}
                 }) 
            }
      })
}

// fs.readFile("./sn/1.txt", "utf-8", (err, data) => {
//       console.log(data);
// })

// fs.readdir("./sn", (err, data) => {
//       console.log(data);
//       console.log();
// })