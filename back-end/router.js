'use strict';

const controller = require('./controllers');

module.exports = (router) => {
	router.get('/search',controller.search);
	router.get('/view',controller.view);
	router.get('/view-candidates',controller.view_candidates);
	router.get('/view-ojthandled',controller.view_ojthandled);
	router.get('/view-two',controller.view_two);
	router.get('/delete',controller.delete);
	router.get('/insert',controller.insert);
	router.get('/update',controller.edit);
	return router;
}