const { body, validationResult } = require('express-validator');

exports.arrayRegisterValidator = [
    // body('name', 'Ne doit pas etre vide').notEmpty(),
    body('email','Doit avoir un format d un email').isEmail(),
    body('password','Le mot de  passe doit contenir au moin 6 caracteres').isLength({min : 6})
]

exports.arrayLogginValidator = [
    body('email','Doit avoir un format d un email').isEmail(),
    body('password','Le mot de  passe doit contenir au moin 6 caracteres').isLength({min : 6})
]

exports.ValidatorFunction=(req,res,next)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}
