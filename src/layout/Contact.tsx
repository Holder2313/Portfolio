'use client'
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Title from "../components/ui/title";
import LinkButtons from "../components/ui/linkButtons";
import Footer from "./Footer";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_frllg71",
        "template_kj8jiuv",
        templateParams,
        "4XljkqM4V52_nEsLn"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccess(true);
        setError("");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setSuccess(false);
        setError("Failed to send message, please try again later.");
      });
  };

  return (
    <section id="contact">
      <div className="container mb-14">
        <Title
          title="Contact"
          subTitle="Prêt à collaborer sur vos prochains projets"
        />
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between md:p-8 rounded-xl bg-secondary cardShadow">
          {/* Formulaire de contact */}
          <div className="w-full lg:w-1/2 p-4">
            <form className="space-y-4" onSubmit={sendEmail}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-slate-200 mt-1 block w-full dark:text-primary-foreground border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full bg-slate-200 dark:text-primary-foreground border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full bg-slate-200 border-gray-300 dark:text-primary-foreground rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-accent text-white py-2 px-4 rounded-md hover:bg-cyan-600 my-4"
                >
                  Envoyer
                </button>
              </div>
              {success && (
                <p className="text-green-500">
                  Votre message a été envoyé avec succès !
                </p>
              )}
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>

          {/* Accroche et icônes */}
          <div className="w-full lg:w-1/2 p-4 flex flex-col items-center lg:items-start">
            <div className="mb-4">
              <p className="text-lg md:text-xl">
                Pour toute demande d'information ou de collaboration, n'hésitez
                pas à me contacter.
              </p>
            </div>

            <LinkButtons />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
