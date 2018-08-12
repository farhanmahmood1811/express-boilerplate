"use strict";

class IndexController {
    get = (req, res, next) => {
        res.status(200).send('Welcome to es6 express boilerplate')
    }
}

export default new IndexController()