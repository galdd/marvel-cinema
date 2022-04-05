/** source/routes/Orders.ts */
import express from "express";
import orderController from "../controllers/order.controller";
import usersValidator from "../middleware/validator/users.validator";
const router = express.Router();

router.post("/", orderController.addOrder);
router.get("/", orderController.getOrders);
router.get("/:id", orderController.getOrder);
// router.put("/users/:id", controller.updateOrder);
// router.delete("/users/:id", controller.deleteOrder);

// router.post("/tokens", controller.addOrder);

export = router;