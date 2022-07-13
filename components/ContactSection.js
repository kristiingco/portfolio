import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import CustomButton from "./CustomButton";

export const ContactSection = () => {
  const [state, handleSubmit] = useForm("xqknvjzv");
  if (state.succeeded) {
    return (
      <p className="text-center mt-10 font-semibold">
        thank you for contacting!
      </p>
    );
  }
  return (
    <section className="mt-10">
      <div className="flex flex-col items-center p-5">
        <h2 className="font-semibold text-lg">
          let&apos;s do something amazing together.
        </h2>
        <form onSubmit={handleSubmit} className="mt-3 flex flex-col w-full">
          <div>
            <label htmlFor="email" className="block text-sm">
              email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="border-2 text-sm p-2 w-full my-2 mb-3"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm">
              message
            </label>
            <textarea
              id="message"
              name="message"
              className="border-2 p-2 w-full my-2"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <CustomButton
            type="submit"
            disabled={state.submitting}
            styleType="primary"
            buttonText="submit"
          />
        </form>
      </div>
    </section>
  );
};
