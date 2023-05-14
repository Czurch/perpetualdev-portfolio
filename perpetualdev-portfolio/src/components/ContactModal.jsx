import { ContactShadows } from "@react-three/drei";

const ContactModal = ({ props }) => {
  return (
    <div>
      <p className="mb-5 text-black text-[15px] leading-normal">
        Like what you see? Please feel free to contact me regarding; job
        opportunities, consultation, or commisions for 3D art.
      </p>
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
          placeholder="Write your message here..."
        />
      </fieldset>
      <div className="flex justify-end mt-5">
        <button className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-secondaryButton text-primary hover:bg-accent focus:shadow-[0_0_0_2px] focus:shadow-primary outline-none cursor-default">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
