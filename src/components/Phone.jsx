import Image from "next/image";

const Phone = ({ image }) => (
  <Image
    className="self-center	md:self-auto"
    src={image}
    alt="App mockup"
    width="210"
    height="460"
  />
);

export default Phone;
