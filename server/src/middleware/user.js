import { handleServerError } from "../config/util.js";
import UserCollection from "../model/user.js";

export function requireEmailUnicity(request, response, next)
{
    function repportEmailAlreadyInUse(user)
    {
        if (user)
            return response.status(401).json({error: 'email aready in use at this site'})
        next()
    }

    const email = request.body.user.email

    UserCollection.findOne({email: email})
        .then(repportEmailAlreadyInUse)
        .catch(handleServerError('requireEmailUnicity', response))
}

export function requireUserIdentification(request, response, next)
{
}

export function requireValideJwt(request, response, next)
{
}
