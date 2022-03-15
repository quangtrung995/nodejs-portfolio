import { Request, Response } from 'express';

//statuscode
import { STATUSCODE, MESSAGE } from '../utils/interface';

export const uploadImage = (req: Request, res: Response) => {
  try {
    // const obj = {
    //   name: req.body.name,
    //   desc: req.body.desc,
    //   img: {
    //     data: fs.readFileSync(
    //       path.join(__dirname + '/uploads/' + req.file?.filename)
    //     ),
    //     contentType: 'image/jpg',
    //   },
    // };
    console.log('REQ HERE: ', req.file);
    res.status(STATUSCODE.SUCCESS).json({ message: MESSAGE.SUCCESS, statuscode: STATUSCODE.SUCCESS });
  } catch (error) {
    res.status(STATUSCODE.SERVER_ERROR).json({ message: error, statuscode: STATUSCODE.SERVER_ERROR });
    console.error('error: ', error);
  }
};
