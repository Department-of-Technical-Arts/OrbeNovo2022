import React from "react";

import Title from "../../common/Text/Title";
import BodyText from "../../common/Text/BodyText";

function Index() {
  return (
    <div className="grid grid-cols-10 items-center">
      <div className="col-span-6">
        <Title title="About Us" />
      </div>
      <div className="col-span-4">
        <BodyText
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        />
      </div>
    </div>
  );
}

export default Index;
