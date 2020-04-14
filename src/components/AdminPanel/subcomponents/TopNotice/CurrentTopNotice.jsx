import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import Loader from "../../../Common/Loader";

function CurrentTopNotice() {
  const [notice, SetNotice] = useState();
  useEffect(() => {
    axios
      .get("http://gtbit-backend.herokuapp.com/api/v1/upper-notice")
      .then((res) => {
        console.log(res);
        console.log(res.data[0].notice);
        SetNotice(res.data[0].notice);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Loader active={!notice}>
        <Typography color="textSecondary" gutterBottom>
          Current Top Notice
        </Typography>
        {notice}
      </Loader>
    </>
  );
}

export default CurrentTopNotice;
