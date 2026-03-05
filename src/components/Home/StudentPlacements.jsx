import cgi from "../../../public/assets/cgi.jpg";
import merrilcorp from "../../../public/assets/merrilcorp.jpg";
import cms from "../../../public/assets/cmsit.jpg";
import stratogent from "../../../public/assets/stratogent.jpg";
import adrenalin from "../../../public/assets/adrenaline.jpg";
import meredith from "../../../public/assets/meredith.jpg";
import universal from "../../../public/assets/universal.jpg";
import agilysis from "../../../public/assets/agilysis.jpg";
import hexaware from "../../../public/assets/hexaware.jpg";
import truglobal from "../../../public/assets/truglobal.jpg";
import altimetrik from "../../../public/assets/altimetrik.jpg";
import iris from "../../../public/assets/iris.jpg";
import bitwise from "../../../public/assets/bitwise.jpg";
import zensar from "../../../public/assets/zensar.jpg";
import axtria from "../../../public/assets/axtria.jpg";
import happiestMinds from "../../../public/assets/happiestmind.jpg";
import persistent from "../../../public/assets/persistent.jpg";
import pwc from "../../../public/assets/pwc.jpg";
import ibm from "../../../public/assets/ibm.jpg";
import wipro from "../../../public/assets/wipro.jpg";
import microsoft from "../../../public/assets/microsoft.jpg";
import genpact from "../../../public/assets/genpact.jpg";
import TCS from "../../../public/assets/TCS.jpg";
import cognizant from "../../../public/assets/cognizant.jpg";

const companies = [
  { name: "CGI", logo: cgi },
  { name: "Merrill Corp", logo: merrilcorp },
  { name: "CMS IT", logo: cms },
  { name: "Stratogent", logo: stratogent },
  { name: "Adrenalin", logo: adrenalin },
  { name: "Meredith", logo: meredith },
  { name: "Universal", logo: universal },
  { name: "Agilysis", logo: agilysis },
  { name: "Hexaware", logo: hexaware },
  { name: "TruGlobal", logo: truglobal },
  { name: "Altimetrik", logo: altimetrik },
  { name: "IRIS", logo: iris },
  { name: "Bitwise", logo: bitwise },
  { name: "Zensar", logo: zensar },
  { name: "Axtria", logo: axtria },
  { name: "Happiest Minds", logo: happiestMinds },
  { name: "Persistent", logo: persistent },
  { name: "PwC", logo: pwc },
  { name: "IBM", logo: ibm },
  { name: "Wipro", logo: wipro },
  { name: "Microsoft", logo: microsoft },
  { name: "Genpact", logo: genpact },
  { name: "TCS", logo: TCS },
  { name: "Cognizant", logo: cognizant },
];

const StudentPlacements = () => {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-[1200px]  mx-auto px-6">
        {/* Title */}
        <div className="text-center flex flex-col items-center mb-6">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#0F3E57]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Students Are Placed In
          </h2>

           <span 
              className="  hidden md:block xl:block lg:block  left-1/2 transform -translate-x-1/2 w-24 h-1 mt-4 ml-[4rem] rounded-full"
              style={{ backgroundColor: "#f28c28" , }}
            ></span>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group border border-blue-200 rounded-lg overflow-hidden hover:border-blue-500 hover:shadow-md transition-all duration-300"
            >
              {/* Logo */}
              <div className="flex items-center justify-center h-[80px] p-3 bg-white">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-[40px] object-contain"
                />
              </div>

              {/* Company Name */}
              <div className="bg-[#e8f3fa] py-2 text-center">
                <p className="text-md font-semibold text-[#04161f]" style={{ fontFamily: "poppins, sans-serif" }}>
                  {company.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentPlacements;
