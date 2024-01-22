const notFoundHandler = (req, res, next) => {
    console.log(err);
    res.state(404)
    .json({message: "resource"})
};
module.exports = notFoundHandler;