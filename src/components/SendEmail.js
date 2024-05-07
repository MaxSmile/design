// src/components/SendEmail.js
import cogoToast from "cogo-toast";
import emailjs from '@emailjs/browser';

export function SendEmail(e, humanTestCode, noForVerify, form, setSubmitting, setNoForVerify) {
    e.preventDefault();
    if (parseInt(humanTestCode) === (11 + noForVerify)) {
        setSubmitting(true);

        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
            .then((result) => {
                cogoToast.success("Thanks for Contacting Us!", {
                    hideAfter: 5,
                });
                setSubmitting(false);
                form.current.reset();
                setNoForVerify(Math.round(Math.random() * 11)); // Update the verification number after successful submission
            }, (error) => {
                cogoToast.error("Failed to send message: " + error.text, { hideAfter: 5 });
                setSubmitting(false);
            });
    } else {
        cogoToast.error("Addition didn't match!", {
            hideAfter: 5
        });
    }
};
