import type { FC } from "react";

interface InfoCard {
  title: string;
  text: string;
}

const cards: InfoCard[] = [
  {
    title: "Effektivitet",
    text: "Vi forstår vigtigheden af din tid. Med vores strømlinede processer og dedikerede team sikrer vi, at projekter afsluttes rettidigt og uden unødvendig forsinkelse.",
  },
  {
    title: "Kvalitet",
    text: "Kvalitet er vores nøgleord. Vores træhegn er fremstillet af de bedste materialer, designet til at holde i mange år med minimal vedligeholdelse.",
  },
  {
    title: "Ordentlighed",
    text: "Vi er et erfarent og professionelt team, som prioriterer god kommunikation fra start til slut. Vi går op i detaljer og sikre høj kvalitet i hele processen.",
  },
];

const AboutInfoSection: FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-4">Hvem er vi?</h2>
          <p className="text-primary-black mb-6">
            Vores navn siger det hele. Vi er eksperter i hegn og dedikeret til
            at levere solide, æstetiske og holdbare hegnsløsninger til alle
            typer ejendomme.
          </p>
          <p className="text-gray-600">
            Vi er et passioneret team, der har specialiseret os i at tilbyde
            hegnsløsninger af højeste kvalitet. Vores opgave er at forbedre dit
            udendørs livsrum og skabe privatliv og sikkerhed med vores æstetisk
            tiltalende og holdbare hegn.
          </p>
        </div>

        <div className="space-y-6">
          {cards.map(({ title, text }) => (
            <div
              key={title}
              className="bg-primary-black text-white p-6 rounded-lg shadow-lg shadow-primary-black"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-200 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutInfoSection;
