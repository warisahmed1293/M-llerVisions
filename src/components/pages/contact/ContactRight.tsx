"use client";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef } from "react";
import { toast } from "react-toastify";

const ContactRight = () => {
  const form = useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      // create a account in https://www.emailjs.com/
      // follow there documentation get "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID",  "YOUR_PUBLIC_KEY"
      // in "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID",  "YOUR_PUBLIC_KEY"  replace it with actual contents
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        // @ts-ignore
        form?.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          toast("Message Send Successfully!");
        },
        (error) => {
          toast("Message Not Send!");
        }
      );
  };

  return (
    <div className="contact-style contact-section__right">
      <form ref={form} onSubmit={sendEmail}>
        <div className={`contact-form `}>
          <div className="two-input-field">
            <motion.div
              initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="single__input"
            >
              <label className="textXL label__style" htmlFor="name">
                Name
              </label>
              <input
                className="input-field-style"
                id="name"
                type="text"
                name="name"
                placeholder="Dein Name"
              />
            </motion.div>
            <motion.div
              initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="single__input"
            >
              <label className="textXL label__style" htmlFor="email">
                E-Mail
              </label>
              <input
                className="input-field-style"
                id="email"
                type="email"
                placeholder="Deine E-Mail"
              />
            </motion.div>
          </div>
          <div className="two-input-field">
            <motion.div
              initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="single__input"
            >
              <label className="textXL label__style" htmlFor="phone">
                Telefonnummer (Optional)
              </label>
              <input
                className="input-field-style"
                id="phone"
                type="number"
                placeholder="Deine Telefonnummer"
              />
            </motion.div>
            <motion.div
              initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="single__input"
            >
              <label className="textXL label__style" htmlFor="subject">
                Thema
              </label>
              <input
                className="input-field-style"
                id="subject"
                type="text"
                placeholder="Gib deiner Nachricht einen Titel"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="single__input"
          >
            <label className="textXL label__style" htmlFor="question">
              Nachricht
            </label>
            <textarea
              className="input-field-style"
              id="question"
              rows={8}
              placeholder="Gib hier deine E-Mail ein"
              name="message"
            ></textarea>
          </motion.div>
        </div>
        <motion.div
          initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="m-t-40px"
        >
          <button className="see-all-blog">
            <span className="textM post-comment light-theme-white-text">
              Absenden
            </span>
          </button>
        </motion.div>
      </form>
    </div>
  );
};

export default ContactRight;
