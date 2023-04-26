import { useGlobalHook } from "./Contexts";

const Filters = () => {
  const { onCheckedBox, onStarMail } = useGlobalHook();
  return (
    <div>
      <h3>Filters</h3>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <label>
          <input type="checkbox" onChange={onCheckedBox} />
          Show UnRead Mail
        </label>
        <label>
          <input type="checkbox" onChange={onStarMail} />
          Show Stared Mail
        </label>
      </div>
    </div>
  );
};

export default Filters;
