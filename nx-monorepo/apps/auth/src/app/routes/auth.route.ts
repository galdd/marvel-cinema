/** source/routes/Users.ts */
import express from "express";
import usersController from "../controllers/auth.controller";
import usersValidator from "../middleware/validator/users.validator";
import signoutMiddleware from "../middleware/signout.middleware";
import verifyMiddleware from "../middleware/verify.middleware";
const router = express.Router();

router.post("/signup", usersValidator.signup, usersController.signup);
router.post("/signin", usersValidator.signinUser, usersController.signin);
router.get(
  "/currentuser/:accessToken",
  verifyMiddleware.verify,
  usersController.currentUser
);
// router.get("/currentToken", usersController.currentToken);
router.delete("/signout", signoutMiddleware.signout, usersController.signout);
router.put("/users/:userId", usersController.validationToken);

// router.put("/users/:id", controller.updateUser);

export = router;
