import React, { useState } from "react";
import { downloadVideo } from "../../utils/api";
import { showToast } from "../Toast/Toast";
import "./YoutubeInputStyle";

function YoutubeInput({ setLoading, loading }) {
  const [url, setUrl] = useState("");

  const handleDownload = async () => {
    try {
      setLoading(true);
      const res = await downloadVideo(url);
      showToast(res.data.message || "✅ Tải video thành công", "success");
    } catch (err) {
      showToast("❌ Lỗi khi tải video", "error");
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
      <button className="button-style" onClick={handleDownload} disabled={loading}>
        {loading ? "⏳ Đang tải..." : "📥 Tải Video"}
      </button>
    </div>
  );
}

export default YoutubeInput;