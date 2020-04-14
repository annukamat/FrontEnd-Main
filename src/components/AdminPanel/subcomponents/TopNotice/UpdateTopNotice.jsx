import React from "react";
import Typography from "@material-ui/core/Typography";
import InputTopNotice from "./InputTopNotice";
import CurrentTopNotice from "./CurrentTopNotice";
import LastTen from "./LastTen";

function UpdateTopNotice() {
  return (
    <div>
      <Typography variant="h4" gutterBottom className="mb-4 text-dark">
        Update Top Notice
      </Typography>
      <InputTopNotice />
      <CurrentTopNotice/>
      <LastTen/>
    </div>
  );
}

export default UpdateTopNotice;
