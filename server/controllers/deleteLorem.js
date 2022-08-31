const { deleteLoremQuery } = require('../database/queries');

const deleteLorem = (req, res) => {
    deleteLoremQuery(req.params.id)
        .then(() => res.redirect('/'))
        .catch((err) => res.status(500).json({ msg: `server error${err}` }));
};
module.exports = deleteLorem;
