export function handleServerError(scope, res)
{
    return function(err)
    {
        res.status(500).json({error: err.message})
        console.error(`[error] ${err.name} at ${scope}: ${err.message}`)
    }
}

export function pickValue(obj, path)
{
    return path.split(':').reduce((o, key) => (o && o[key] !== undefined) ? o[key] : undefined, obj);
}
