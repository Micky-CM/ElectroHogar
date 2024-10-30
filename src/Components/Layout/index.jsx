const Layout = ({ children })=> {
  return (
    <div className="flex flex-col items-center min-h-screen mt-28 mb-20">
      {children}
    </div>
  )
}

export default Layout