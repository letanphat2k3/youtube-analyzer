import React, { useState } from "react";
import { downloadVideo } from "../../utils/api";
import { showToast } from "../Toast/Toast";
import "./YoutubeInputStyle";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

function YoutubeInput({ setLoading, loading }) {
  const [url, setUrl] = useState("");

  const handleDownload = async () => {
    try {
      setLoading(true);
      const res = await downloadVideo(url);
      showToast(res.data.message || "Tải video thành công", "success");
    } catch (err) {
      showToast("Lỗi khi tải video", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Nhập link YouTube"
        className="input-style"
        disabled={loading}
      />
      <button className="button-style flex items-center gap-2" onClick={handleDownload} disabled={loading}>
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="4" className="opacity-25"/><path d="M4 12a8 8 0 018-8" strokeWidth="4" className="opacity-75"/></svg>
            Đang tải...
          </>
        ) : (
          <>
            <ArrowDownTrayIcon className="h-5 w-5" />
            Gửi Video
          </>
        )}
      </button>
    </div>
  );
}

export default YoutubeInput;