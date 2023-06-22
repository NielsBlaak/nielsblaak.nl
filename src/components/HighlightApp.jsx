import Phone from "../components/Phone";
import Layout from "../components/Layout";
import clsx from "clsx";

const HighlightApp = ({ image, className, title, description, years }) => {
  return (
    <div className={clsx(className)}>
      <Layout>
        <Phone image={image} />
        <div className="ml-8 mt-4">
          <h1 className="text-white font-bold text-4xl">{title}</h1>
          <p className="text-white mt-2">{description}</p>
        </div>
        <span className="font-mono mt-4 mr-0 ml-auto text-white w-64">
          {years}
        </span>
      </Layout>
    </div>
  );
};

export default HighlightApp;
