import FullLogo from "../../assets/logo.png";
import Illustration1 from "../../assets/Yoga.png";
import Illustration2 from "../../assets/Union.png";
import Illustration3 from "../../assets/Union1.png";
import Illustration4 from "../../assets/Union2.png";
import Logo from "../../assets/icons/Logo";
export default function LoginDashBoard(props) {
  const { children } = props;
  return (
    <div className="h-screen  flex  flex-col ">
      <div className="h-10 bg-white flex justify-center items-center">
        <span>helloooooooooosdcodscnssdc sdjdsbc sdnchsdbchdsc sd </span>
      </div>
      <div className=" pt-10 h-screen bg-primery flex md:flex-row flex-col justify-around">
        {/* //Image and other  */}
        <div className="flex flex-col items-center pt-10 gap-4">
          <div>
            <Logo />
          </div>
          <div className="flex justify-between w-full">
            <img src={`${Illustration3}`} width="44px" height="32.35px" />
            <img
              className="relative top-[-67px] left-[157px]"
              src={`${Illustration2}`}
              width="70px"
              height="51.47px"
            />
            <img
              className="relative bottom-[-86px] left-[57px]"
              src={`${Illustration4}`}
              width="39px"
              height="28.68px"
            />
          </div>
          <div>
            <img src={`${Illustration1}`} width="217px" height="303px" />
          </div>
          <div>
            <span>
              "Yoga is the journey of the self, through the self, to the self."
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center bg-primery">
          {children}
        </div>
      </div>
    </div>
    // <div className="pt-10 flex items-center justify-center w-full h-screen bg-primery">

    //      <div className="absolute left-[515px] top-[391px] bg-primery">
    //         <img src={`${Illustration1}`} width="217px" height="303px" />
    //       </div>

    //       <div className="absolute left-[530px] top-[293px] bg-primery">
    //         <img src={`${Illustration2}`} width="70px" height="51.47px" />
    //       </div>

    //       <div className="absolute left-[157px] top-[382px] bg-primery">
    //         <img src={`${Illustration3}`} width="44px" height="32.35px" />
    //       </div>

    //       <div className="absolute left-[664px] top-[450px] bg-primery">
    //         <img src={`${Illustration4}`} width="39px" height="28.68px" />
    //       </div>

    //       <div className="absolute left-[349px] top-[114px] bg-primery">
    //         <img src={`${FullLogo}`} width="116px" height="68px" />
    //       </div>
    //       <div className="absolute right-[100px]">{children}
    //         </div>

    // </div>
  );
}
