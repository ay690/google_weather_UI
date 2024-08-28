const Footer = () => {
  return (
    <footer className="relative lg:sticky sm:mt-0 bottom-0 grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 dark:bg-secondary-dark text-sm group-even:focus:invisible">
      <div className="px-8 py-3 flex items">
        <p className="capitalize links custom-text">india</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-2 sm:gap-y-4 px-8 py-3 grid-flow-row-dense">
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-start">
          <p className="links custom-text">Advertising</p>
          <p className="links custom-text">Business</p>
          <p className="links custom-text">How Search works</p>
        </div>

        <div className="flex justify-center space-x-8 md:ml-auto ">
          <p className="links custom-text">Privacy</p>
          <p className="links custom-text">Terms</p>
          <p className="links custom-text">Setting</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
