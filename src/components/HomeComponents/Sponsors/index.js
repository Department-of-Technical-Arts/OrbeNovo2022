import React from "react";

import Title from "../../common/Text/Title";
import BodyText from "../../common/Text/BodyText";

function Index() {
  return (
    <div className="grid grid-cols-10 items-center">
      <div className={"col-span-5"}></div>
      <div className="col-span-5">
        <Title title="Sponsors" />
      </div>
    </div>
  );
}

export default Index;
