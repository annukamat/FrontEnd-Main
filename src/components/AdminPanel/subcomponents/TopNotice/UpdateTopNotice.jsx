import React from "react";
import Typography from "@material-ui/core/Typography";
import InputTopNotice from "./InputTopNotice";

function UpdateTopNotice() {
  return (
    <div>
      <Typography variant="h4" gutterBottom className="mb-4">
        Update Top Notice
      </Typography>
      <InputTopNotice />
    </div>
  );
}

export default UpdateTopNotice;
