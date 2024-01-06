function multipleMongoosesToObject(mongooses) {
    return mongooses.map((mongoose) => mongoose.toObject());
}
function MongoosesToObject(mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
}

module.exports = {
    multipleMongoosesToObject,
    MongoosesToObject,
};
