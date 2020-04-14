import React from "react";
import Typography from "@material-ui/core/Typography";
import InputTopNotice from "./InputTopNotice";
import CurrentTopNotice from "./CurrentTopNotice";
import LastTen from "./LastTen";
import AfterRequestAlerts from "../../../Common/AfterRequestAlerts";

function UpdateTopNotice() {
  const [showAlert, setAlert] = React.useState();
  return (
    <div>
      <Typography variant="h4" gutterBottom className="mb-4 text-dark">
        Update Top Notice
      </Typography>
      {showAlert ? (
        <AfterRequestAlerts
          type="success"
          routeData={{ route: "/admin", name: "Dashboard" }}
          msg={{ title: "Successfully Updated", desc: "Top Notice is succesfully updated" }}
        />
      ) : (
        <div>
          <InputTopNotice setAlert={()=>setAlert(true)} />
          <CurrentTopNotice />
          <LastTen />
        </div>
      )}
    </div>
  );
}

export default UpdateTopNotice;
