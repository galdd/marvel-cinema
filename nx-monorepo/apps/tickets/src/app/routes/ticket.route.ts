/** source/routes/Tickets.ts */
import express from 'express';
import usersController from '../controllers/ticket.controller';
const router = express.Router();

router.post('/', usersController.setTicket);
router.put('/', usersController.cancelTicket);
router.get('/', usersController.getTickets);
router.get('/showid/:showId', usersController.getTicketsByShowId);
router.get('/:id', usersController.getTicket);
router.put('/:id', usersController.updateTicket);
// router.delete("/users/:id", controller.deleteTicket);

// router.post("/tokens", controller.addTicket);

export = router;
