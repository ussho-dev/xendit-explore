module.exports = async (req, res) => {
    console.log("callback payments.......");
    console.log(req.body);
    res.json(req.body);
};