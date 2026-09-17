import { toast } from "sonner";

const CONTACT_API_ENDPOINT = "/api/contact";

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
            console.error("Contact form submission failed:", {
                status: response.status,
                statusText: response.statusText,
                data,
            });
            throw new Error("Failed to send message.");
        }

        toast.success("Thanks for contacting us!");
        form.current.reset();
        resetCap();
    } catch (error) {
        console.error("Contact form submission error:", error);
        toast.error("Failed to send message. Please try again.");
        resetCap();
    } finally {
        setSubmitting(false);
    }
}
