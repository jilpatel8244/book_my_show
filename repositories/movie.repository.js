const db = require("../models/index");
const { CastingAndCrewMembers, Movie, MovieLanguage, MovieMember } = db;

exports.createCastAndCrew = async (memberPayload) => {
    try {
        let newMembers = await CastingAndCrewMembers.bulkCreate(memberPayload);
        return newMembers;
    } catch (error) {
        console.error('Error while creating cast : ', error);
        throw error;
    }
}

exports.createMovie = async ( { title, duration, genre, release_date, description, languages, members } ) => {
    try {
        const t = await db.sequelize.transaction();

        let newMovie = await Movie.create({title, duration, genre, release_date, description}, { transaction: t });

        await MovieLanguage.bulkCreate(languages, { transaction: t });

        await MovieMember.bulkCreate(members, { transaction: t });

        await t.commit();
        return newMovie;
    } catch (error) {
        await t.rollback();
        console.error('Error while creating movie : ', error);
        throw error;
    }
}

