import { CiCircleCheck } from "react-icons/ci";

export default function HighLightsCard() {
  return (
    <div className="bg-accent-green text-white text-sm lg:text-md shadow-lg rounded-lg shadow-primary-black   lg:text-lg p-6 my-6 md:my-0">
      <div className="flex justify-around items-center  ">
        <div>
          <div className="flex items-center gap-2">
            <CiCircleCheck className="h-5 w-5" />
            <h2 className="my-5">Holdbarhed og kvalitet</h2>
          </div>
          <div className="flex items-center gap-2">
            <CiCircleCheck className="h-5 w-5" />
            <h2 className="my-5">Skræddersyede løsninger</h2>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <CiCircleCheck className="h-5 w-5" />
            <h2 className="my-5"> Passioneret team</h2>
          </div>
          <div className="flex items-center gap-2">
            <CiCircleCheck className="h-5 w-5" />
            <h2 className="my-5">God kundeservice</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
