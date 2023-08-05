const mongoose = require("mongoose");
const Volenteer = require("../models/Volenteer");

exports.addVolenteer = async (req, res) => {
    try {
        const { email, name, contactNo } = req.body;

        if (!email || !name || !contactNo) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const volenteerDetail = new Volenteer({
            email,
            name,
            contactNo
        });

        await volenteerDetail.save();

        return res.status(200).json({
            success: true,
            message: "Successfully added the data"
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error while adding volenteer data"
        });
    }
};
