import { AiOutlineClose } from "react-icons/ai";
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { IoIosPeople } from 'react-icons/io';
import { MdMeetingRoom, MdPersonSearch } from "react-icons/md";
import { RiPhoneFindLine } from 'react-icons/ri';
import { LateralMenuItem } from "./LateralMenuItem";

interface LateralMenuInterface {
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
}
export const LateralMenu = ({ setClose }: LateralMenuInterface) => {
  return (
    <div className="fixed right-0 top-0 w-screen z-20 h-screen ">
      <div className="bg-black w-full h-full opacity-70 absolute"></div>
      <div className=" bg-white w-2/3 absolute right-0 top-0 h-screen z-30">
        <div className="h-14 flex items-center justify-end pr-3 bg-slate-200">
          <AiOutlineClose
            onClick={() => {
              setClose(false);
            }}
            size={25}
          />
        </div>
        <div className="h-4/5 w-full flex flex-col gap-10 pt-7 items-end">
          <LateralMenuItem
            backgroundColor="yellow-logo"
            name="Quienes somos"
            route="about"
            Icon={IoIosPeople}
          />
          <LateralMenuItem
            backgroundColor="red-logo"
            name="Publica tu habitación"
            route="room/post"
            Icon={MdMeetingRoom}
          />
          <LateralMenuItem
            backgroundColor="red-logo"
            name="Busca tu habitación"
            route="room/find"
            Icon={RiPhoneFindLine}
          />
          <LateralMenuItem
            backgroundColor="red-logo"
            name="Postulate como roomie"
            route="roomie/post"
            Icon={BsFillPersonPlusFill}
          />
          <LateralMenuItem
            backgroundColor="red-logo"
            name="Busca tu roomie"
            route="room/find"
            Icon={MdPersonSearch}
          />
        </div>
      </div>
    </div>
  );
};
