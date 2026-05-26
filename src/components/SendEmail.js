// src/components/SendEmail.js
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const CAP_API_ENDPOINT = process.env.NEXT_PUBLIC_CAP_API_ENDPOINT || "https://vasilkoff.info/cap/";

const getCapUrl = (path) => {
    const endpoint = CAP_API_ENDPOINT.endsWith("/") ? CAP_API_ENDPOINT : `${CAP_API_ENDPOINT}/`;
    return `${endpoint}${path}`;
};

const verifyCapToken = async (token) => {
    if (!token) {
        return false;
    }

    const response = await fetch(getCapUrl("verify"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
    });
    const data = await response.json().catch(() => ({}));
    return response.ok && data.success;
};

export async function SendEmail(e, capToken, form, setSubmitting, resetCap) {
    e.preventDefault();
    if (!capToken) {
        toast.error("Please complete the human check.");
        return;
    }

    setSubmitting(true);

    try {
        const verified = await verifyCapToken(capToken);
        if (!verified) {
            toast.error("Human verification expired. Please retry.");
            resetCap();
            return;
        }

        await emailjs.sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            form.current,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
        );
        toast.success("Thanks for Contacting Us!");
        form.current.reset();
        resetCap();
    } catch (error) {
        toast.error(error?.text ? `Failed to send message: ${error.text}` : "Failed to send message. Please try again.");
        resetCap();
    } finally {
        setSubmitting(false);
    }
};
