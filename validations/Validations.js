import { inputDataIsNotValid } from "../errorUtils/ErrorUtil.js";

export async function validateInputData(
    fullName, 
    email, 
    phoneNumber, 
    eventSelected
    ) {
    if(!fullName || !email || !phoneNumber || !eventSelected) {
        throw inputDataIsNotValid();
    }
}