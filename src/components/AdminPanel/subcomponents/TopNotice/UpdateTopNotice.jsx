import React from "react";
import Typography from "@material-ui/core/Typography";
import InputTopNotice from "./InputTopNotice";
import CurrentTopNotice from "./CurrentTopNotice";

function UpdateTopNotice() {
  return (
    <div>
      <Typography variant="h4" gutterBottom className="mb-4">
        Update Top Notice
      </Typography>
      <InputTopNotice />
      <CurrentTopNotice/>
    </div>
  );
}

export default UpdateTopNotice;
