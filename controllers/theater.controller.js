const { createTheater, createHall } = require("../repositories/theater.repository");

exports.createTheater = async (req, res) => {
    try {
        let { name, location, city_id, cancellation_available, wheel_chair_facility_available, parking_facility_available, bank_account_number, ifsc_code} = req.body;

        let newTheater = await createTheater({ name, location, city_id, cancellation_available, wheel_chair_facility_available, parking_facility_available, bank_account_number, ifsc_code});

        console.log(newTheater);

        res.status(200).json({
            success: true,
            message: newTheater
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "something wrong while creating theater : ", error
        })
    }
}

exports.createHallAndSeats = async (req, res) => {
    try {
        let { theaterId, hallNumber, seats } = req.body;

        // create hall and seats
        let newHall = await createHall({ theaterId, hallNumber, seats });

        res.status(200).json({
            success: true,
            message: newHall
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "something wrong while creating hall : ", error
        })
    }
}