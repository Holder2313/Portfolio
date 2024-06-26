const MentionsLegales = () => {
  return (
    <div className="container pt-28 mx-auto py-8 px-4">
      <div className=" mb-10">
        <h1 className="text-2xl md:text-3xl">Mentions Légales</h1>
        <div className=" hidden md:block h-1 w-[100px] bg-accent rounded mt-2 "></div>
      </div>

      <div className=" ">
        <p className=" text-xl font-semibold text-primary dark:text-cyan-600">
          Site:
        </p>
        <p className="mb-4">www.portfolio-sebastien-perrot.com</p>

        <p className=" text-xl font-semibold text-primary dark:text-cyan-600">
          Propriétaire :
        </p>
        <p className="mb-4">Sébastien Perrot</p>

        <p className=" text-xl font-semibold text-primary dark:text-cyan-600">
          Email:{" "}
        </p>
        <p className="mb-4">sebastien.perrot.dev@gmail.com</p>

        <p className=" text-xl font-semibold text-primary dark:text-cyan-600">
          Hébergement :
        </p>
        <ul className="mb-4">
          <li>Nom de l'hébergeur : Vercel Inc. </li>
          <li>Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789</li>
          <li>Email : support@vercel.com</li>
          <li>Site web : https://vercel.com</li>
        </ul>

        <div className=" mt-5">
          <p className=" text-xl font-semibold text-primary dark:text-cyan-600">
            Propriété intellectuelle :
          </p>
          <p className="mb-4">
            Tous les contenus présents sur ce site sont protégés par le droit
            d&#39;auteur. Toute reproduction, représentation, modification,
            publication, adaptation de tout ou partie des éléments du site, quel
            que soit le moyen ou le procédé utilisé, est interdite, sauf
            autorisation écrite préalable.
          </p>

          <p className=" text-xl font-semibold text-primary dark:text-cyan-600">
            Protection des données personnelles :
          </p>
          <p className="mb-4">
            Conformément à la loi&#39;Informatique et Libertés&#39;, vous
            disposez d&#39;un droit d&#39;accès, de rectification et de
            suppression des données vous concernant. Pour exercer ce droit, vous
            pouvez nous contacter par email à l&#39;adresse suivante :
            sebastien.perrot.dev@gmail.com.
          </p>

          <div className=" mt-12">
            <p>
              En accédant à ce site, vous acceptez les présentes conditions
              générales d&#39;utilisation. Le site est accessible à tout moment.
              Une interruption pour raison de maintenance technique peut être
              toutefois décidée par le propriétaire du site.
            </p>
            <p>
              Le site a pour objet de fournir une information concernant
              l’ensemble des activités de la société. Le propriétaire s’efforce
              de fournir sur le site des informations aussi précises que
              possible. Toutefois, il ne pourra être tenu responsable des
              omissions, des inexactitudes et des carences dans la mise à jour,
              qu’elles soient de son fait ou du fait des tiers partenaires qui
              lui fournissent ces informations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
