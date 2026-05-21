import Layout from './Layout';

interface HighlightAppProps {
  className: string;
  title: string;
  description: string;
  years: string;
}

export default function HighlightApp({
  className,
  title,
  description,
  years,
}: HighlightAppProps) {
  return (
    <div className={className}>
      <Layout>
        <div className="ml-8 mt-4">
          <h1 className="text-4xl font-bold text-white">{title}</h1>
          <p className="mt-2 text-white">{description}</p>
        </div>
        <span className="ml-auto mr-0 mt-4 w-64 font-mono text-white">{years}</span>
      </Layout>
    </div>
  );
}
