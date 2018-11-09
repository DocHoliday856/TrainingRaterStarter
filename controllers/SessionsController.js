const Sessions = require('../models').Sessions;

const getAll = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, sessions;
    
    let whereStatement = {};
    if (req.query.name) {
        whereStatement.name = {
            $like: '%' + req.query.name + '%'
        } ;
    }


    [err, sessions] = await to(Sessions.findAll({where: whereStatement}))
    return res.json(sessions);
}
module.exports.getAll = getAll;