import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';


export const protectedRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({ message: "Unauthorized access - token not found" });
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if(!decode){
            return res.status(401).json({ message: "Unauthorized access - invalid token" });
        }

        const user = await User.findById(decode.userId).select("-password");
        if(!user){
            return res.status(404).json({ message: "Unauthorzied - User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Error in protectedRoute middleware:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}