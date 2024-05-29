const db = require("../models/index");
const { Booking, BookingSeat } = db;

exports.makeBooking = async ({ userId, showId, noOfTickets, seats }) => {
    try {
        const t = await db.sequelize.transaction();

        let newBooking = await Booking.create({
            user_id: userId,
            show_id: showId,
            no_of_tickets: noOfTickets
        }, { transaction: t });

        seats = seats.map((element) => {
            return {
                ...element,
                booking_id: newBooking.id
            }
        });

        await BookingSeat.bulkCreate(seats, { transaction: t });

        await t.commit();
        return newBooking;
    } catch (error) {
        await t.rollback();
        console.error('Error while booking : ', error);
        throw error;
    }
}

exports.updateBookingStatus = async ({ bookingId, status }) => {
    try {
        let updatedBooking = await Booking.update(
            { status: status },
            {
                where: {
                    id: bookingId
                }
            }
        );

        return updatedBooking;
    } catch (error) {
        console.error('Error while updating booking status : ', error);
        throw error;
    }
}