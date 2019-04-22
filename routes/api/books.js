const router = require("express").Router();
const bookController = require("../../controllers/bookController");

router.route("/") // <---- if route is /api/books then go here
  .get(bookController.findAll) // <---- function defined in the controllers
  .post(bookController.create);
router
  .route("/:id")  //< ---- represents a specific number api/books/ then a number or ID
  .get(bookController.findById) // <--- 
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;
