// src/components/ContactForm.jsx
import TextField from "./TextField";
import { ImSpinner9 } from "react-icons/im";
import { MdArrowRightAlt } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { SendEmail } from "./SendEmail";

const ContactForm = ({ className }) => {
    const [noForVerify, setNoForVerify] = useState(0);
    const [isSubmitting, setSubmitting] = useState(false);
    const [humanTestCode, setHumanTestCode] = useState(null);

    useEffect(() => {
        setNoForVerify(Math.round(Math.random() * 11));
    }, []);

    const form = useRef(null);

    return (
        <form onSubmit={(e) => SendEmail(e, humanTestCode, noForVerify, form, setSubmitting, setNoForVerify)} className={className ?? ""}>
            <div className="grid md:grid-cols-2 gap-5 md:gap-7">
                <TextField required name="name" placeholder="Name Here*" />
                <TextField required name="email" placeholder="Email Here*" />
            </div>
            <TextField rows={4} required name="message" className="mt-5" multiline={true} placeholder="Message Here*" />

            <div className="flex items-center mt-5">
                <p className="!mb-0 mr-5">Are you human?</p>
                <h4>11 + {noForVerify} = </h4>
                <input required type="text" onChange={(e) => setHumanTestCode(e.target.value)} className="border border-neutral-200 focus:border-dark outline-0 p-2 h-8 w-16 ml-3" />
            </div>

            <div className="text-center md:text-right mt-5">
                <button className="bg-dark text-white text-[12px] px-6 py-3 group" type="submit" disabled={isSubmitting}>
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
