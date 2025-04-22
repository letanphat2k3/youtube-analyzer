import React from "react";
import { Toaster, toast } from "react-hot-toast";

export const showToast = (message, type = "success") => {
  type === "success" ? toast.success(message) : toast.error(message);
};

function Toast() {
  return <Toaster position="top-right" reverseOrder={false} />;
}

export default Toast;