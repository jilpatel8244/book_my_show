const { createShow, getShows } = require("../repositories/show.repository");

exports.createShow = async (req, res) => {
    try {
        let { movieId, hallId, startTime, endTime, showDate, showPrices } = req.body;

        let newShow = await createShow( { movieId, hallId, startTime, endTime, showDate, showPrices } );
        console.log(newShow);

        res.status(200).json({
            success: true,
            message: newShow
        })
    } catch (error) {
        console.log("error while creating show : ", error);
        res.status(500).json({
            success: false,
            message: "error while creating show : ", error
        })
    }
}

exports.getShows = async (req, res) => {
    try {
        let { movieId } = req.body;

        let shows = await getShows(movieId);
        console.log(shows);

        res.status(200).json({
            success: true,
            message: shows
        })
    } catch (error) {
        console.log("error while getting shows : ", error);
        res.status(500).json({
            success: false,
            message: "error while getting shows : ", error
        })
    }
}