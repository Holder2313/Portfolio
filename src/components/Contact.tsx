import React from "react";
import Title from "./ui/title";
import LinkButtons from "./ui/linkButtons";


const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className=" container mb-14 ">
        <Title
          title="Contact"
          subTitle="Prêt à collaborer sur vos prochains projets "
        />
        <div className=" flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between md:p-8 rounded-xl bg-secondary cardShadow ">
          {/* Formulaire de contact */}
          <div className="w-full lg:w-1/2 p-4">
            {/* <h2 className="text-2xl font-bold mb-4">Contactez-moi</h2> */}
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium ">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className=" bg-slate-200 mt-1 block w-full dark:text-primary-foreground border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium ">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full bg-slate-200 dark:text-primary-foreground border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium ">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full bg-slate-200 border-gray-300 dark:text-primary-foreground rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-accent text-white py-2 px-4 rounded-md hover:bg-blue-600 my-4"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>

          {/* Accroche et icônes */}
          <div className="w-full lg:w-1/2 p-4 flex flex-col items-center lg:items-start">
            <div className="mb-4">
              {/* <h2 className="text-2xl font-bold">Nous contacter</h2> */}
              <p className=" text-lg md:text-xl">
                Pour toute demande d'information ou de collaboration, n'hésitez
                pas à me contacter.
              </p>
            </div>
            
            <LinkButtons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
