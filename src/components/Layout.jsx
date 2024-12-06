function Layout({ children }) {
  return (
    <div className="mx-auto flex max-w-screen-lg flex-col-reverse px-4 py-8 md:flex-row">
      {children}
    </div>
  );
}

export default Layout;
