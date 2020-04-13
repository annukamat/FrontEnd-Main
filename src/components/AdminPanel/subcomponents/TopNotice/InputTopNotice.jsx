import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function InputTopNotice() {
  return (
    <>
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
      />
      <div className="d-flex justify-content-end justify-content-md-center">
        <Button color="primary" variant={"contained"}>
          Update
        </Button>
      </div>
    </>
  );
}

export default InputTopNotice;
