const db = require("../models/index");
const { Show, ShowSeatPrice, Hall, Theater } = db;

exports.createShow = async ( { movieId, hallId, startTime, endTime, showDate, showPrices } ) => {
    try {
        const t = await db.sequelize.transaction();

        let newShow = await Show.create({
            movie_id: movieId,
            hall_id: hallId,
            start_time: startTime,
            end_time: endTime,
            show_date: showDate
        }, { transaction: t });

        await ShowSeatPrice.bulkCreate(showPrices, { transaction: t });

        await t.commit();
        return newShow;
    } catch (error) {
        await t.rollback();
        console.error('Error while creating show : ', error);
        throw error;
    }
}

exports.getShows = async (movieId) => {
    try {
        let shows = await Show.fetchAll({
            include: {
                include: {
                    model: Hall,
                    include: {
                        model: Theater,
                    }
                }
            },
            where: {
                movie_id: movieId
            }
        });

        return shows;
    } catch (error) {
        console.error('Error while getting shows : ', error);
        throw error;
    }
}