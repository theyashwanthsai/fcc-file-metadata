var express = require('express');
var cors = require('cors');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), function(req, res){
  // if(!req.file){
  //   returm
  // }
  var fileName = req.file.originalname;
  var fileType = req.file.mimetype;
  var fileSize = req.file.size;
  console.log(fileSize);
  res.json({ name: fileName, type: fileType, size: fileSize  });
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
