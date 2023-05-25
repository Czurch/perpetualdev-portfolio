import { useState, useRef } from "react";
import * as emailjs from "@emailjs/browser";

const ContactModal = ({ props }) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_dcagdnt",
        "template_f0vbhmk",
        {
          from_name: form.name,
          to_name: "Luke",
          from_email: form.email,
          to_email: "lukesferreira1217@gmail.com",
          message: form.message,
        },
        "xhwQHY7jrI44I2OpP"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for reaching out! Expect a response back back soon."
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert(
            "Oops, something went wrong with the email service. Try again later :)"
          );
        }
      );
  };

  return (
    <div className="flex flex-col w-full h-screen p-12 pt-16 justify-start items-center">
      <div className="flex flex-col justify-between w-2/3 h-5/6">
        <p className="mb-5 text-black text-[15px] leading-normal justify-self-start">
          Like what you see? Please feel free to contact me regarding; job
          opportunities, consultation, or commisions for 3D art.
        </p>
        <form
          className="flex flex-col h-full justify-between"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <fieldset className="mb-[15px] w-full flex flex-col justify-start">
            <label
              className="text-[13px] leading-none mb-2.5 text-black block"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-accent shadow-[0_0_0_1px] shadow-accent h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-accent outline-none"
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
          </fieldset>
          <fieldset className="mb-[15px] w-full flex flex-col justify-start">
            <label
              className="text-[13px] leading-none mb-2.5 text-black block"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-accent shadow-[0_0_0_1px] shadow-accent h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-accent outline-none"
              id="username"
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@email.com"
            />
          </fieldset>
          <fieldset className="mb-[15px] w-full flex flex-col justify-start">
            <label
              className="text-[13px] leading-none mb-2.5 text-black block"
              htmlFor="message"
            >
              Your message
            </label>
            <input
              className="grow shrink-0 rounded px-2.5 text-[15px] align-text-top leading-none text-accent shadow-[0_0_0_1px] shadow-accent h-[100px] focus:shadow-[0_0_0_2px] focus:shadow-accent outline-none"
              id="message"
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here..."
            />
          </fieldset>
          <div className="flex justify-end mt-5">
            <button
              className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-secondaryButton text-primary hover:bg-accent focus:shadow-[0_0_0_2px] focus:shadow-primary outline-none cursor-default"
              type="submit"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
