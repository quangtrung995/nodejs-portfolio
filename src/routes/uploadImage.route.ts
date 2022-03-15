import express from 'express';
import { uploadImage } from '../controllers';
import multer from 'multer';
import path from 'path';

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    console.log('FILENAME: ', file);
    const getType = file.mimetype.split('/');
    const fileName = `${file.fieldname}-${Date.now()}.${getType[getType.length - 1]}`;
    cb(null, fileName);
  }
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 3145728 },
  fileFilter: (req, file, callBack) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.png' && ext !== '.jpg') {
      return callBack(new Error('Only jpg & png are allowed !'));
    }
    callBack(null, true);
  }
});

router.post('/', upload.single('avatar'), uploadImage);

export default router;
