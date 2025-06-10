import express from 'express';
import { protectedRoute } from '../middlewares/auth.middleware.js';
import { getRecommendedUsers, getMyFriends, sendFriendRequest} from '../controllers/user.controller.js';

const router = express.Router();

router.use(protectedRoute)
router.get('/', getRecommendedUsers);
router.get('/friends', getMyFriends);
router.post('/friend-request/:id', sendFriendRequest);



export default router;