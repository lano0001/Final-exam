import Card from "./Card";

// Icons
import { SiTrustpilot } from "react-icons/si";
import { TbTargetArrow } from "react-icons/tb";
import { FiRefreshCw } from "react-icons/fi";
import { BsCheck2Square } from "react-icons/bs";

export default function CardList() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <Card text={"4,7 stjerner på TrustPilot"}>
        <SiTrustpilot className="w-7 h-7 text-accent-green" />
      </Card>
      <Card text={"Ekspres levering og opsætning"}>
        <TbTargetArrow className="w-7 h-7 text-accent-green" />
      </Card>
      <Card
        text={
          "Tilfredshedsgaranti - vi forlader aldrig en opgave uden du er tilfreds!"
        }
      >
        <FiRefreshCw className="w-7 h-7 text-accent-green" />
      </Card>
      <Card text={"Kvalitet til skarpe priser"}>
        <BsCheck2Square className="w-7 h-7 text-accent-green" />
      </Card>
    </div>
  );
}
