import * as React from "react";
import MenuContent from "./MenuContent";

const OpeningMenu: React.FC = () => {
  const [opened, setOpened] = React.useState(false);
  return (
    <div>
      <h1>Opening Menu</h1>
      <button onClick={() => setOpened(!opened)}>
        {opened ? "Close" : "Open"}
      </button>
      {opened && <MenuContent />}
    </div>
  );
};

export default OpeningMenu;
