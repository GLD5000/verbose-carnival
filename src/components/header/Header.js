import WriteTipBtn from "./WriteTipBtn";
import GldSvg from "../icons/GldSvg";
import PropTypes from "prop-types";
import AuthButton from "./AuthButton";

const Header = ({
  title,
  authClickHandler,
  signedIn,
  showAddTipForm,
  setShowAddTipForm,
  addObjectToInputFormState,
  setSearchQuery,
  clearTags
}) => {
  return (
    <section className="header-container z-[999]">
      <header className="header">
        <GldSvg />
        <h1>{title}</h1>
        <WriteTipBtn
          showAddTipForm={showAddTipForm}
          setShowAddTipForm={setShowAddTipForm}
          addObjectToInputFormState={addObjectToInputFormState}
          setSearchQuery={setSearchQuery}
          clearTags={clearTags}
        />
        <AuthButton authClickHandler={authClickHandler} signedIn={signedIn} />
      </header>
    </section>
  );
};
Header.defaultProps = {
  title: "Default Title",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
