const Footer =() => {
  return (
    <footer className="w-full flex justify-between items-center bg-blue-900 text-blue-50 px-10 py-8">
      <div className="font-medium text-xl">
          &copy; {new Date().getFullYear()} Electro Hogar
      </div>

        <div className="flex text-3xl gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <i className="fab fa-tiktok"></i>
          </a>

        </div>

    </footer>
  )
}

export default Footer
