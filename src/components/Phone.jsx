import Image from "next/image";

const Phone = ({ image }) => (
  <Image src={image} alt="App mockup" width="210" height="460" />
);

export default Phone;
