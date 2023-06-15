import bodyParser from 'body-parser';
import cors from 'cors';

export default (app: any) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
};
