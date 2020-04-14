import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import Loader from "../../../Common/Loader";
import domainurl from '../../../Common/Domain'

function CurrentTopNotice() {
  const [notice, SetNotice] = useState();
  useEffect(() => {
    axios
      .get(`${domainurl}/api/v1/upper-notice`)
      .then((res) => {
        console.log(res);
        console.log(res.data[0].notice);
        if(res.status===200)
        SetNotice(res.data[0].notice);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="my-3">
      <Loader active={!notice}>
        <Typography color="textSecondary" gutterBottom>
          Current Top Notice
        </Typography>
        {notice}
      </Loader>
    </div>
  );
}

export default CurrentTopNotice;
