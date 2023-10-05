import FooterItemsContainer from "./FooterItemsContainer";

function Footer() {
  return (
    <footer className="text-white bg-yellow-500 ">
      <div className="px-4 text-center md:flex md:justify-between md:items-center sm:px-12 py-7 md">
        <FooterItemsContainer />
      </div>
    </footer>
  );
}

export default Footer;
