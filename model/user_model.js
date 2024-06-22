const mongoose = require('mongoose');

const chiefSchema = mongoose.Schema({
    chiefname: {
        type: String,
        required: true
    },
    chiefpassword: {
        type: String,
        required: true
    }
});

const foodSchema = mongoose.Schema({
    foodname: {
        type: String,
        required: true
    },
    foodprice: {
        type: String,
        required: true
    },
    foodcategory: {
        type: String,
        required: true
    },
    foodimage: {
        type: String,
        required: true
    },
    foodstatus: {
        type: String,
        default: "Available"
    }
});
const orderSchema = mongoose.Schema({
    table: {
        type: String,
        required: true
    },
    orderItems: [{
        foodname: {
            type: String,
            required: true
        },
        foodQuantity: {
            type: Number,
            required: true
        }
    }]
});

const userSchema = mongoose.Schema({
    shopname:{
        type:String,
    },
    shopcode: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    chief: [chiefSchema],
    food: [foodSchema],
    orders:[orderSchema]
});

const User = mongoose.model("admins", userSchema);

module.exports = User;
