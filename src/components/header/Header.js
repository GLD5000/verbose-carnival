import PropTypes from "prop-types";
import AddTip from "./AddTip/AddTip";
import Filters from "./Filters";
import AuthButton from "./AuthButton";
import { useState } from "react";

const Header = ({
  title,
  searchQuery,
  setSearchQuery,
  tagSet,
  setTagState,
  tagState,
  titleSet,
  setTip,
  newTipId,
  tagListAll,
  authClickHandler,
  signedIn,
}) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <AuthButton authClickHandler={authClickHandler} signedIn={signedIn} />
      <Filters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        titleSet={titleSet}
        tagSet={tagSet}
        setTagState={setTagState}
        tagState={tagState}
      />
      <AddTip setTip={setTip} newTipId={newTipId} tagListAll={tagListAll} />
    </header>
  );
};
Header.defaultProps = {
  title: "Default Title",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
