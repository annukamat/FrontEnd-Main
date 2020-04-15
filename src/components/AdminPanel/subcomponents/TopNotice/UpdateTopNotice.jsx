import React from "react";
import Typography from "@material-ui/core/Typography";
import InputTopNotice from "./InputTopNotice";
import CurrentTopNotice from "./CurrentTopNotice";
import LastTen from "./LastTen";
import AfterRequestAlerts from "../../../Common/AfterRequestAlerts";
import Divider from "@material-ui/core/Divider";
import HeadingCard from "../../../Common/HeadingCard";

function UpdateTopNotice() {
  const [showAlert, setAlert] = React.useState();
  const [lastTen,setLastTen]= React.useState([]);
  return (
    <div>
    <HeadingCard heading={'Update Top Notice'}/>
      {showAlert ? (
        <AfterRequestAlerts
          type="success"
          routeData={{ route: "/admin", name: "Dashboard" }}
          msg={{ title: "Successfully Updated", desc: "Top Notice is succesfully updated" }}
        />
      ) : (
        <div>
          <InputTopNotice setAlert={()=>setAlert(true)} />
          <Divider/>
          <CurrentTopNotice setLastTen={setLastTen}/>
          <Divider className="my-4"/>
          <LastTen data={lastTen}/>
        </div>
      )}
    </div>
  );
}

export default UpdateTopNotice;
