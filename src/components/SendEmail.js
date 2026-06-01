import { toast } from "sonner";

const CONTACT_API_ENDPOINT =
    process.env.NEXT_PUBLIC_CONTACT_API_ENDPOINT || "https://vasilkoff.info/api/contact/telegram";

export async function SendEmail(e, capToken, form, setSubmitting, resetCap) {
    e.preventDefault();
    if (!capToken) {
        toast.error("Please complete the human check.");
        return;
    }

    const formData = new FormData(form.current);
    const payload = {
        name: String(formData.get("name") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        message: String(formData.get("message") || "").trim(),
        capToken,
        sourceMetadata: {
            sourceSite: "design.vasilkoff.com",
            sourcePath: window.location.pathname,
            sourceUrl: window.location.href,
            referrer: document.referrer,
        },
    };

    if (!payload.name || !payload.email || !payload.message) {
        toast.error("Please fill in all required fields.");
        return;
    }

    setSubmitting(true);

    try {
        const response = await fetch(CONTACT_API_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });
        const data = await response.json().catch(() => ({}));

        if (!response.ok || !data.success) {
            throw new Error(data.message || "Failed to send message.");
        }

        toast.success("Thanks for contacting us!");
        form.current.reset();
        resetCap();
    } catch (error) {
        toast.error(error?.message || "Failed to send message. Please try again.");
        resetCap();
    } finally {
        setSubmitting(false);
    }
}
