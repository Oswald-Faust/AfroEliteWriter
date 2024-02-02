import bcrypt from 'bcrypt'
import { handleServerError } from '../config/util.js';
import jwt from 'jsonwebtoken'
import UserCollection from "../model/user.js";

export async function register(request, response)
{
    async function tokenizeUser(user)
    {
        return jwt.sign({uid: user._id}, process.env.JWT_SECRET_KEY)
    }

    request.body.user.password = bcrypt.hashSync(request.body.user.password, 10)
    UserCollection.create(request.body.user)
        .then(function(user)
        {
            response.status(201).json({token: tokenizeUser(user)})
        })
        .catch(handleServerError('register', response))
}

export function login(request, response)
{
    function passwordCheck(user)
    {
        if (!user)
            return response.status(401).json({error: 'unrecognized email'})
        if (!(bcrypt.compareSync(request.body.user.password, user.password)))
            return response.status(401).json({error: 'wrong password'})
        return response.status(200).json({token: tokenizeUser(user)})
    }

    UserCollection.findOne({email: request.body.user.email})
        .then(passwordCheck)
        .catch(handleServerError('login', response))
}
