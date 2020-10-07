const express = require("express");
const app = express();
const multer = require("multer");
const cors = require("cors");
const port = 8000;

app.use(cors());
app.use(express.static("public"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage,
}).array("files");

app.post("/upload", (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      res.status(500).json(err);
    } else {
      res.status(500).json(err);
    }
    res.status(200).json({
      files: req.files,
    });
  });
});

app.get("/", (req, res) => {
  res.status(200).json({
    sucess: true,
    data: "Yay! Connect successfully!",
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
