import Layout from './Layout';

function HighlightApp({ className, title, description, years }) {
  return (
    <div className={className}>
      <Layout>
        <div className="ml-8 mt-4">
          <h1 className="text-4xl font-bold text-white">{title}</h1>
          <p className="mt-2 text-white">{description}</p>
        </div>
        <span className="ml-auto mr-0 mt-4 w-64 font-mono text-white">
          {years}
        </span>
      </Layout>
    </div>
  );
}

export default HighlightApp;
