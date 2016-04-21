/* GET 'home' page */
module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',         pageHeader: {
            title: 'Loc8r',
            strapline:'Find places to work with wifi near you!'}
    });
};

/* GET 'location info' page */
module.exports.locationInfo = function (req,res) {
    res.render('location-info', {title: 'Locations Info'});
};

/* GET 'Add review' page */
module.exports.addReview = function (req,res) {
    res.render('index', {title: 'Add review'});
};

/* GET 'Add review forum' */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', { title: 'Add review'});
};

/* GET 'About page' */
module.exports.about = function(req, res) {
    res.render('generic-text', {title: 'About'});
};