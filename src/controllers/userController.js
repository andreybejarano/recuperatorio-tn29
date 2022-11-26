const userController = {
    index: (req, res) => {
        res.render('home');
    },
    list: (req, res) => {
        res.render('about');
    }
}

module.exports = userController;