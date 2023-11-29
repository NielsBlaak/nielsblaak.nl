const Layout = ({ children }) => (
  <div className="flex flex-col-reverse md:flex-row mx-auto max-w-screen-lg px-4 py-8">
    {children}
  </div>
);

export default Layout;
