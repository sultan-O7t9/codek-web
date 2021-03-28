const { useMediaQuery } = require("react-responsive");

const useMedia = () => {
  const is1150 = useMediaQuery({ maxWidth: "1150px" });
  const isIPADproWidth = useMediaQuery({ maxDeviceWidth: "1024px" });
  const isIPADpro = useMediaQuery({
    maxDeviceWidth: "1024px",
    minDeviceHeight: "1300px",
  });
  const is991 = useMediaQuery({ maxWidth: "991px" });
  const isIPAD = useMediaQuery({ maxWidth: "768px" });
  const is576 = useMediaQuery({ maxWidth: "576px" });
  const isMobile = useMediaQuery({ maxWidth: "400px" });
};

export default useMedia;
