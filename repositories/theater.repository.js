const db = require("../models/index");
const { Theater, Hall, Seat } = db;

exports.createTheater = async (theaterPayload) => {
    try {
        let newTheater = await Theater.create(theaterPayload);
        return newTheater;
    } catch (error) {
        console.error('Error while creating theater : ', error);
        throw error;
    }
}

exports.createHall = async ({theaterId, hallNumber, seats}) => {
    const t = await db.sequelize.transaction();

    try {
        let newHall = await Hall.create({
            theater_id: theaterId,
            number: hallNumber
        },
        { transaction: t });

        let newSeats = JSON.parse(seats).map((element) => {
            return {
                ...element,
                hall_id: newHall.id
            }
        });

        await Seat.bulkCreate(newSeats, { transaction: t });

        await t.commit();
        
        return newHall;
    } catch (error) {
        await t.rollback();
        console.error('Error while creating hall : ', error);
        throw error;
    }
}
