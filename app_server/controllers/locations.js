/* GET 'home' page */
module.exports.homelist = function (req, res) {
    res.render('locations-list', {title: 'Home'});
};

/* GET 'location info' page */
module.exports.locationInfo = function (req,res) {
    res.render('location-info', {title: 'Locations Info'});
};

/* Get 'Add review' page */
module.exports.addReview = function (req,res) {
    res.render('index', {title: 'Add review'});
};

module.exports.addReview = function(req, res) {
    res.render('location-review-form', { title: 'Add review'});
};