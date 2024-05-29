const { makeBooking, updateBookingStatus } = require("../repositories/booking.repository");

exports.makeBooking = async (req, res) => {
    try {
        let { userId, showId, noOfTickets, seats } = req.body;

        let newBooking = await makeBooking( { userId, showId, noOfTickets, seats } );
        console.log(newBooking);

        res.status(200).json({
            success: true,
            message: newBooking
        })
    } catch (error) {
        console.log("error while booking : ", error);
        res.status(500).json({
            success: false,
            message: "error while booking : ", error
        })
    }
}

exports.updateBookingStatus = async (req, res) => {
    try {
        let { bookingId, status } = req.body;
        
        let updatedBooking = await updateBookingStatus({ bookingId, status });
        console.log(updatedBooking);

        res.status(200).json({
            success: true,
            message: updatedBooking
        })
    } catch (error) {
        console.log("error while updating booking status : ", error);
        res.status(500).json({
            success: false,
            message: "error while updating booking status : ", error
        })
    }
}