const { createCastAndCrew, createMovie } = require("../repositories/movie.repository");

exports.createCastAndCrew = async (req, res) => {
    try {
        let castAndCrewMembers = await createCastAndCrew(req.body);

        console.log(castAndCrewMembers);

        res.status(200).json({
            success: true,
            message: castAndCrewMembers
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "something wrong while creating cast and crew : ", error
        })
    }
}

exports.createMovie = async (req, res) => {
    try {
        let { title, duration, genre, release_date, description, languages, members } = req.body;

        let newMovie = await createMovie({ title, duration, genre, release_date, description, languages, members });

        console.log(newMovie);

        res.status(200).json({
            success: true,
            message: newMovie
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "something wrong while creating movie : ", error
        })
    }
}