import CollapseSvg from "../components/icons/CollapseSvg";
import ExpandSvg from "../components/icons/ExpandSvg";
import InputText from "../elements/InputText";

export default function SearchTitle({
  title,
  onClick,
  expanded,
  setSearchQuery,
  searchQuery,
  listId,
}) {
  const placeholder = " Type or select a title...";
  const defaultValue = searchQuery.length > 0 ? searchQuery : null;
  return (
    <>
      <button
        className="grid w-full grid-cols-frAutoFr justify-items-end rounded-none rounded-t-lg border-b border-b-borderGrey hover:bg-slate-800 active:bg-slate-600"
        onClick={onClick}
      >
        <h2 className="col-start-2">{title}</h2>
        {expanded ? (
          <CollapseSvg className="tip-title-svg" />
        ) : (
          <ExpandSvg className="tip-title-svg" />
        )}
      </button>
      <InputText
        placeholder={placeholder}
        onInput={setSearchQuery}
        type="search"
        value={searchQuery}
        listId={listId}
        controlled={true}
        defaultValue={defaultValue}
      />
    </>
  );
}
