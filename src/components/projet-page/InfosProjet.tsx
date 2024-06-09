import React from "react";

interface InfosProjetProps {
  client: string;
  date: string;
  tags: string[];
}

const InfosProjet: React.FC<InfosProjetProps> = ({ client, date, tags }) => {
  return (
    <div className="mx-auto w-full lg:w-[80%] px-10 flex flex-col">
      <div className="w-full flex justify-between items-center">
        <p className="text-cyan-800 font-semibold dark:text-cyan-600">Client</p>
        <p>{client}</p>
      </div>
      <div className="w-full h-[1px] bg-primary/50 mb-5"></div>

      <div className="w-full flex justify-between items-center">
        <p className="text-cyan-800 font-semibold dark:text-cyan-600">Date</p>
        <p>{date}</p>
      </div>
      <div className="w-full h-[1px] bg-primary/50 mb-5"></div>

      <div className="mt-2">
        <p className="mb-5 text-cyan-800 font-semibold dark:text-cyan-600">
          Technologies
        </p>
        <ul className="flex">
          {tags.map((tag, index) => (
            <li
              className="mr-2 bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground px-2 py-1 text-center sm:px-5 sm:py-2 rounded-md"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfosProjet;
