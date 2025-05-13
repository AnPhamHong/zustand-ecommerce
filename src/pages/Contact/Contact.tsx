import React, { useState } from "react";
import "@/styles/pages/ContactUs.scss";
import { MdAddLocation, MdMarkEmailRead, MdOutlinePhone } from "react-icons/md";
import VerticalTabs from "@/components/UI/Tabs";
import emailjs from "@emailjs/browser";
import { FormData } from "@/types/contact";

type Errors = Partial<Record<keyof FormData, string>>;

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const templateAutoId = import.meta.env.VITE_EMAILJS_TEMPLATE_AUTO_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [infoForm, setInfoForm] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
  });

  const onChangeForm = (keyChange: string, value: unknown) => {
    setInfoForm((v) => {
      return {
        ...v,
        [keyChange]: value,
      };
    });
  };

  const validateForm = (formData: FormData): Errors => {
    const errors: Errors = {};

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.firstName || !formData.firstName.trim()) {
      errors.firstName = "First name is required";
    }
    if (!formData.lastName || !formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    if (!formData.message || !formData.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const [formErrors, setFormErrors] = useState<Errors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm(infoForm); // `formData` is your state

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors); // show errors
      return;
    }

    const templateParamsForOwner = {
      from_email: infoForm.email,
      from_name: `${infoForm.firstName} ${infoForm.lastName}`,
      message: infoForm.message,
    };

    const templateParamsForCustomer = {
      to_email: infoForm.email,
      from_name: "Borcelle Store",
      to_name: `${infoForm.firstName} ${infoForm.lastName}`,
    };

    emailjs
      .send(serviceId, templateAutoId, templateParamsForOwner, publicKey)
      .then(
        (result) => {
          alert(result.text);
          return emailjs.send(
            serviceId,
            templateId,
            templateParamsForCustomer,
            publicKey
          );
        },
        (error) => {
          console.log(error.text);
        }
      );

    console.log("Form OK", infoForm);
  };

  return (
    <>
      <section className="contact-container">
        <div className="contact-box">
          <div className="contact-column contact-column-left">
            <p className="p-touch">Get in Touch</p>
            <h1>Let's Chat, Contact with Us</h1>
            <p className="p-desc">
              Have any questions or feedback? We're here to help. Send us a
              message. We'll get back to you within 24 hours.
            </p>
            <form className="contact-form ">
              <section className="section">
                <div className="row">
                  <div className="section-form">
                    <label htmlFor="firstName">First name</label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First name"
                      value={infoForm.firstName}
                      onChange={(e) =>
                        onChangeForm("firstName", e.target.value)
                      }
                    />
                    {formErrors.firstName && (
                      <p className="error">{formErrors.firstName}</p>
                    )}
                  </div>
                  <div className="section-form">
                    <label htmlFor="lastName">Last name</label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Last name"
                      value={infoForm.lastName}
                      onChange={(e) => onChangeForm("lastName", e.target.value)}
                    />
                    {formErrors.lastName && (
                      <p className="error">{formErrors.lastName}</p>
                    )}
                  </div>
                </div>
              </section>
              <section className="section">
                <div className="section-form">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email address"
                    value={infoForm.email}
                    onChange={(e) => onChangeForm("email", e.target.value)}
                  />
                  {formErrors.email && (
                    <p className="error">{formErrors.email}</p>
                  )}
                </div>
              </section>
              <section className="section">
                <div className="section-form">
                  <label htmlFor="email">Message</label>
                  <textarea
                    id="message"
                    placeholder="Type your message"
                    value={infoForm.message}
                    onChange={(e) => onChangeForm("message", e.target.value)}
                  />
                  {formErrors.message && (
                    <p className="error">{formErrors.message}</p>
                  )}
                </div>
              </section>
              <div className="btn-container">
                <button
                  type="submit"
                  className="pay-btn"
                  onClick={handleSubmit}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="contact-column contact-column-right">
            <img
              src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <MdMarkEmailRead />
                </div>
                <div className="contact-item-info">
                  <p>Email</p>
                  <p>an.ph410@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <MdOutlinePhone />
                </div>
                <div className="contact-item-info">
                  <p>Phone</p>
                  <p>(+005) 432 986 450</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <MdAddLocation />
                </div>
                <div className="contact-item-info">
                  <p>Address</p>
                  <p>Ho Chi Minh city, Vietnam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <VerticalTabs />
      </section>
    </>
  );
}
