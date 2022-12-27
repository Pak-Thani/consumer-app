import React, { PureComponent } from "react";
import Styles from "./index.module.css";

export class CustomSnackbar extends PureComponent {
  render() {
    const { isActive, message, type } = this.props;
    const switchType = () => {
      switch (type) {
        case "error":
          return Styles.snackbarError;
        case "success":
          return Styles.snackbarSuccess;
        case "warning":
          return Styles.snackbarWarning;
        case "info":
          return Styles.snackbarInfo;

        default:
          return <h1>Error</h1>;
      }
    };
    return (
      <div
        className={
          isActive
            ? [Styles.snackbar, switchType(type), Styles.fadeIn].join(" ")
            : [Styles.snackbar, switchType(type), Styles.fadeOut].join(" ")
        }
      >
        {message}
      </div>
    );
  }
}
