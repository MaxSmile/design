// src/components/ContactForm.jsx
import TextField from "./TextField";
import { ImSpinner9 } from "react-icons/im";
import { MdArrowRightAlt } from "react-icons/md";
import { useCallback, useEffect, useRef, useState } from "react";
import { SendEmail } from "./SendEmail";

const CAP_API_ENDPOINT = process.env.NEXT_PUBLIC_CAP_API_ENDPOINT || "https://vasilkoff.info/cap/";

const ContactForm = ({ className }) => {
    const [isSubmitting, setSubmitting] = useState(false);
    const [capToken, setCapToken] = useState("");
    const [capError, setCapError] = useState("");
    const capWidgetRef = useRef(null);
    const form = useRef(null);

    useEffect(() => {
        import("@cap.js/widget");
    }, []);

    const resetCap = useCallback(() => {
        setCapToken("");
        setCapError("");
        if (capWidgetRef.current && typeof capWidgetRef.current.reset === "function") {
            capWidgetRef.current.reset();
        }
    }, []);

    const handleCapSolve = useCallback((event) => {
        const token = event?.detail?.token;
        if (!token) {
            return;
        }
        setCapToken(token);
        setCapError("");
    }, []);

    const handleCapReset = useCallback(() => {
        setCapToken("");
        setCapError("");
    }, []);

    const handleCapError = useCallback((event) => {
        setCapToken("");
        setCapError(event?.detail?.message || "Human verification failed. Please retry.");
    }, []);

    const setCapWidgetRef = useCallback(
        (node) => {
            if (capWidgetRef.current) {
                capWidgetRef.current.removeEventListener("solve", handleCapSolve);
                capWidgetRef.current.removeEventListener("reset", handleCapReset);
                capWidgetRef.current.removeEventListener("error", handleCapError);
            }
            capWidgetRef.current = node;
            if (!node) {
                return;
            }
            node.addEventListener("solve", handleCapSolve);
            node.addEventListener("reset", handleCapReset);
            node.addEventListener("error", handleCapError);
        },
        [handleCapSolve, handleCapReset, handleCapError]
    );

    return (
        <form
            ref={form}
            onSubmit={(e) => SendEmail(e, capToken, form, setSubmitting, resetCap)}
            className={className ?? ""}
        >
            <div className="grid md:grid-cols-2 gap-5 md:gap-7">
                <TextField required name="name" placeholder="Name Here*" />
                <TextField required name="email" placeholder="Email Here*" />
            </div>
            <TextField rows={4} required name="message" className="mt-5" multiline={true} placeholder="Message Here*" />

            <div className="mt-6 rounded-md border border-neutral-200 bg-white p-4">
                <div className="mb-3">
                    <h4 className="text-sm font-semibold text-dark">I stand with Ukraine 🇺🇦</h4>
                    <p className="!mb-0 text-xs leading-relaxed text-slate-500">
                        A quiet anti-spam check using the same privacy-friendly verification backend as Vasilkoff chat.
                    </p>
                </div>
                <cap-widget ref={setCapWidgetRef} data-cap-api-endpoint={CAP_API_ENDPOINT} />
                {capError ? <p className="!mb-0 mt-2 text-xs text-red-600">{capError}</p> : null}
            </div>

            <div className="text-center md:text-right mt-5">
                <button className="bg-dark text-white text-[12px] px-6 py-3 group disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={isSubmitting}>
                    {!isSubmitting ? (
                        <>
                            SEND MESSAGE
                            <MdArrowRightAlt className="inline text-xl ml-1 duration-400 group-hover:translate-x-2" />
                        </>
                    ) : (
                        <>
                            SENDING
                            <ImSpinner9 className="icon-spin inline text-xl ml-1 duration-400 group-hover:translate-x-2" />
                        </>
                    )}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
