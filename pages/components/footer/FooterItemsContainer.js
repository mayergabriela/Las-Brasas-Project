import FooterItem from "./FooterItem";
import FooterButton from "./FooterButton";
import FooterImage from "./FooterImage";
import FooterMenus from "./FooterMenus";

const FooterItemsContainer = () => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-6 px-5 py-16 sm:grid-cols-3 lg:grid-cols-4 sm:px-8">
        <FooterImage />
        <FooterMenus />
        <FooterItem />
        <FooterButton />
      </div>
      <div className="pt-8 pb-8 text-sm text-center bottom-color-footer w-auto">
        <p>2023 Las Brasas Cook ⓒ | All Rights Reserved </p>
      </div>
    </section>
  );
};

export default FooterItemsContainer;
