import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { showToast } from "../Toast/Toast";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || "YOUR_CLIENT_ID_HERE";

export default function GoogleLoginButton({ onLoginSuccess }) {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="flex justify-center mb-6">
        
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const decoded = jwtDecode(credentialResponse.credential);
            showToast(`Xin chào ${decoded.name}`, "success");
            onLoginSuccess?.(decoded);
          }}
          onError={() => showToast("Đăng nhập thất bại!", "error")}
        />
      </div>
    </GoogleOAuthProvider>
  );
}
