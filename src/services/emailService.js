import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_z702sqm';
const TEMPLATE_ID = 'template_9znqvih';
const PUBLIC_KEY = 'Pqrjh4WPpqsHx5GX8';

export const sendVolunteerEmail = async (formData) => {
    try {
        const templateParams = {
            to_name: 'Vanprastha Admin',
            from_name: formData.name,
            name: formData.name,
            email: formData.email, // Matches {{email}} in Reply To
            title: 'New Volunteer Signup', // Matches {{title}} in Subject
            from_email: formData.email,
            phone: formData.phone,
            interest: formData.interest,
            message: formData.message,
        };

        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            templateParams,
            PUBLIC_KEY
        );
        return response;
    } catch (error) {
        console.error('EmailJS Error:', error);
        throw error;
    }
};
