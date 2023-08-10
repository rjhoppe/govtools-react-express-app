const multer = require('multer');

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
        console.log('Initializing multer...')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
        console.log('Located file!')
    }
});

// Create the multer instance
const upload = multer({ storage: storage });
console.log('Finished!')

module.exports = upload;