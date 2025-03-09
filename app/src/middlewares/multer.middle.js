const multer = require('multer');
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require('../utils/cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads", // اسم المجلد في Cloudinary
    allowedFormats: ["jpeg", "png", "jpg",'heic','webp'],
    transformation: [{ width: 500, height: 500, crop: "limit" }]
  }
});

const upload = multer({ storage });

module.exports = upload;

// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname);
//     }
// });

// const upload = multer({ storage });

// module.exports = upload;