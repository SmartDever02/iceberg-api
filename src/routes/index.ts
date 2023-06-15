import { Router } from 'express';
import { getData } from '../controllers/DataController';
import {
  getUserData,
  addWord,
  removeWord,
} from '../controllers/UserDataController';

const router: Router = Router();

router.get('/data', getData);

router.get('/user-data', getUserData);
router.post('/user-data', addWord);
router.delete('/user-data/remove', removeWord);

export default router;
