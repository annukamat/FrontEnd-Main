import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios'
import Loader from "../../../Common/Loader";

function InputTopNotice() {
  const [val,setVal]=useState();
  const [active,setActive]=useState(false);
  const update = (e) => {
    e.preventDefault();
    setActive(true)
    console.log("update called");
    axios({
      url: "http://gtbit-backend.herokuapp.com/api/v1/upper-notice",
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        notice: val,
      },
    })
      .then((data) => {
        console.log(data);
        setActive(false)
        setVal('')
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    <Loader active={active} text={'Updating'}>
      <TextField
        fullWidth={true}
        autoFocus
        helperText="Notice to be shown on top of Home page"
        label="Top Notice"
        multiline
        required
        rows={2}
        rowsMax={2}
        size={"medium"}
        variant={"outlined"}
        placeholder="Enter notice here"
        value={val}
        onChange={e=>setVal(e.target.value)}
      />
      <div className="d-flex justify-content-end justify-content-md-center">
        <Button color="primary" variant={"contained"} onClick={update}>
          Update
        </Button>
      </div>
      </Loader>
    </>
  );
}

export default InputTopNotice;