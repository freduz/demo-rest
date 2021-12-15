import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

class FileUploadHandler {
  constructor(fileFor, fileType) {
    this.fileFor = fileFor;
    this.fileType = fileType;
    this.uploadFolder = fileFor === 'user' ? 'users' : 'product';
    this.multerStorage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, `public/uploads/${this.uploadFolder}`);
      },
      filename: (req, file, cb) => {
        const ext = file.mimetype.split('/')[1];
        cb(null, `${this.fileFor}-${uuidv4()}.${ext}`);
      },
    });

    this.multerFilter = (req, file, cb) => {
      if (file.mimetype.startsWith(this.fileType)) {
        cb(null, true);
      } else {
        cb(new Error('Not a valid file'), false);
      }
    };
    this.getMulter = this.getMulterInstance.bind(this);
  }

  getMulterInstance() {
    const upload = multer({
      storage: this.multerStorage,
      fileFilter: this.multerFilter,
    });
    return upload;
  }
}

export default FileUploadHandler;
