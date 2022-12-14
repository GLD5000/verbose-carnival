export default function CollapseSvg() {
  return (
    <div className="svg-wrapper m-1">
      <svg
        id="collapse-svg"
        alt="Collapse"
        height="100%"
        width="100%"
        viewBox="0 0 10 10"
      >
        <path
          d="M 1,5
    L 5,1 
    L 9,5"
          style={{
            stroke: "#ffffff",
            strokeWidth: "20%",
            strokeLinecap: "round",
            fill: "none",
          }}
        />
      </svg>
    </div>
  );
}
