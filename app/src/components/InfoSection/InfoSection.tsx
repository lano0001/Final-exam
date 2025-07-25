import CardList from "../Card/CardList";
import HighLightsCard from "../HighLightsCard/HighLightCards";
import HeaderTitle from "../HeaderTitles/HeaderTitle";
import TextColumn from "../TextColumn/TextColumn";

export default function InfoSection({}) {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Left side */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="space-y-4">
            <HeaderTitle text={"Professionelle og erfarne hegn-specialister"} />
            <TextColumn />
          </div>
          <HighLightsCard />
        </div>

        {/* right side */}
        <CardList />
      </div>
    </section>
  );
}
