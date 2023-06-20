import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { DialogLeavingPage } from "../Components/DialogLeavingPage";
import { useNavigatingAway } from "../hooks/useNavigatingAway";

export const Home = () => {
  const [value, setValue] = useState("");
  const [canShowDialogLeavingPage, setCanShowDialogLeavingPage] = useState(
    false
  );
  const [
    showDialogLeavingPage,
    confirmNavigation,
    cancelNavigation
  ] = useNavigatingAway(canShowDialogLeavingPage);

  function handleInputChange(e) {
    setValue(e.target.value);
    // value is asynchronic, so it's updated in the next render
    if (e.target.value !== "") setCanShowDialogLeavingPage(true);
    else setCanShowDialogLeavingPage(false);
  }

  return (
    <Box component="form" sx={{ marginTop: "100px" }}>
      <DialogLeavingPage
        showDialog={showDialogLeavingPage}
        setShowDialog={setCanShowDialogLeavingPage}
        confirmNavigation={confirmNavigation}
        cancelNavigation={cancelNavigation}
      />
      <div style={{ margin: "15px" }}>
        try introducing a value, then navigating to /about
      </div>
      <TextField
        id="contact-name"
        name="contactName"
        label="Contact Name"
        value={value}
        onChange={handleInputChange}
      />
    </Box>
  );
};
