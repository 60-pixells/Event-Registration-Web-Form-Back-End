import { validateInputData } from "../validations/Validations.js";
import { storeUserRegistrationDetails, getUserRegistrationsDetails} from "../services/IndexService.js";

export async function addUserRegistration(req, res) {
    const {
        fullName,
        email,
        phoneNumber,
        eventSelected
    } = req.body;
    try {
        await validateInputData(fullName, email, phoneNumber, eventSelected);
        const response = await storeUserRegistrationDetails(
            fullName,
            email,
            phoneNumber,
            eventSelected
        );
        res.send({
            success: true,
            message: "Details are stored successfully",
            response,
        })
    } catch(error) {
        res.send({
            success: false,
            message: error.message
        });
    }
}

export async function getUserRegistrations(req, res) {
    const response = await getUserRegistrationsDetails();
    res.json(response);
}