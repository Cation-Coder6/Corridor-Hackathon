const { StatusCodes } = require("http-status-codes")

const uploadData = async(req, res) => {
    const data = req.body;
    res.status(StatusCodes.CREATED).json({ data })
}

module.exports = uploadData