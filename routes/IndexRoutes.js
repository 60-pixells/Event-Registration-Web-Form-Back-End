import { Router } from "express";
import { addUserRegistration, getUserRegistrations } from "../controllers/IndexController.js";

const router = Router();

// GET /user-registration
// Description: Retrieves all user registrations.
// Method: GET
// Route: /user-registration
// Response: An array of objects containing user registration data.

router.get("/", getUserRegistrations);


// POST /user-registration
// Description: Registers a new user.
// Method: POST
// Route: /user-registration
// Request Body: JSON object with the following fields:
// fullName (string): The full name of the user.
// email (string): The email address of the user.
// phoneNumber (string): The phone number of the user.
// eventSelected (string): The event selected by the user.
// Validation: Validates the received data.
// Response: JSON object with a success message if the data is properly received and stored.

router.post("/", addUserRegistration);


export default router;