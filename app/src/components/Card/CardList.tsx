import Card from "./Card";

import TrustpilotLogo from "../../../../public/svg/trustpilot.svg";

export default function CardList() {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-1 gap-4">
      <Card text={"4,7 stjerner på TrustPilot"} icon={TrustpilotLogo} />
      <Card text={"4,7 stjerner på TrustPilot"} icon={TrustpilotLogo} />
      <Card text={"4,7 stjerner på TrustPilot"} icon={TrustpilotLogo} />
      <Card text={"4,7 stjerner på TrustPilot"} icon={TrustpilotLogo} />
    </div>
  );
}
