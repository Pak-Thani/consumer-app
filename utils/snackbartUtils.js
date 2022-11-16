import React from "react";

export function useSnackbar() {
  const [isActive, setIsActive] = React.useState(false);
  const [message, setMessage] = React.useState();
  const [type, setType] = React.useState();

  React.useEffect(() => {
    if (isActive === true) {
      setTimeout(() => {
        setIsActive(false);
      }, 1000);
    }
  }, [isActive]);

  const openSnackBar = (msg = "SNACKBAR HERE !!!") => {
    setMessage(msg);
    setIsActive(true);
  };

  return {
    isActive,
    message,
    openSnackBar,
    setIsActive,
    setMessage,
    type,
    setType,
  };
}
