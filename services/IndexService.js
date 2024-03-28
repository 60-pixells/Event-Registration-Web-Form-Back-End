import UserRegistration from "../models/UserRegistrations.js";

export async function storeUserRegistrationDetails(
    fullName,
    email,
    phoneNumber,
    eventSelected) {
        const userRegistrationObj = new UserRegistration({
            fullName,
            email,
            phoneNumber,
            eventSelected
        });

        try {
            const doc = userRegistrationObj.save();
            return doc;
        } catch (error) {
            console.log("Error Thrown While Saving The Document", error.message);
        }
}

export async function getUserRegistrationsDetails() {
    const userRegisteredObjs = await UserRegistration.find();
    return userRegisteredObjs;
}