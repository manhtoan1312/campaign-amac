"use client";

import React, { useState, useEffect } from "react";

type State = "FORM" | "SUBMITTING" | "SUCCESS" | "ERROR";

export default function CampaignForm() {
  const [mounted, setMounted] = useState(false);
  const [state, setState] = useState<State>("FORM");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleAction = async () => {
    if (!name || !phone) {
      setErrorMessage("VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN.");
      setState("ERROR");
      return;
    }

    setState("SUBMITTING");
    setErrorMessage("");

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });

      const data = await response.json();

      if (response.ok) {
        setState("SUCCESS");
      } else {
        setErrorMessage(data.message || "XÁC NHẬN THẤT BẠI. VUI LÒNG THỬ LẠI.");
        setState("ERROR");
      }
    } catch (error) {
      setErrorMessage("LỖI KẾT NỐI MÁY CHỦ.");
      setState("ERROR");
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/images/voucher.jpg";
    link.download = "AMAC_EXCLUSIVE_VOUCHER.jpg";
    document.body.appendChild(link);
    link.click();

    // Safety check: ensure the link is still attached before removing
    if (link.parentNode === document.body) {
      document.body.removeChild(link);
    }
  };

  const handleShare = async () => {
    try {
      const response = await fetch("/images/voucher.jpg");
      const blob = await response.blob();
      const file = new File([blob], "AMAC_VOUCHER.jpg", { type: "image/jpeg" });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "AMAC Exclusive Voucher",
          text: "Voucher đặc quyền từ AMAC Collective",
        });
      } else {
        handleDownload();
      }
    } catch (error) {
      handleDownload();
    }
  };

  if (state === "SUCCESS") {
    return (
      <div className="animate-luxury-slide flex flex-col items-center text-center w-full">
        <h2 className="luxury-heading text-2xl mb-2 text-black leading-tight">
          XÁC NHẬN THÀNH CÔNG
        </h2>
        <p className="font-header text-sm tracking-luxury text-gray-500 mb-10 uppercase">
          VOUCHER CỦA BẠN ĐÃ SẴN SÀNG
        </p>

        <div className="border border-black p-5 bg-white mb-10 w-full max-w-2xl ring-1 ring-black/5 overflow-hidden">
          <img
            src="/images/voucher.jpg"
            alt="AMAC VOUCHER"
            className="w-full h-auto block shadow-2xl"
          />
        </div>

        <div className="flex flex-col gap-6 items-center w-full">
          <button
            type="button"
            onClick={handleShare}
            className="editorial-cta w-full justify-center cursor-pointer border-none outline-none"
          >
            LƯU / CHIA SẺ VOUCHER
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13" />
            </svg>
          </button>

          <a
            suppressHydrationWarning
            href="https://zalo.me/0969783553"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contact-premium mt-8 w-full group"
          >
            <div className="shimmer-overlay"></div>
            <div className="auto-shimmer"></div>
            <span className="relative z-10 flex items-center gap-3">
              LIÊN HỆ ĐẶT HÀNG NGAY
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="transition-transform duration-500 group-hover:translate-x-2"
              >
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-luxury-slide border border-black p-5 md:p-14 bg-white relative shadow-xl w-full">
      <div className="mb-12 border-b border-black pb-6">
        <h2 className="luxury-heading text-xl text-black mb-1">
          NHẬP THÔNG TIN CỦA BẠN
        </h2>
        <p className="text-[10px] tracking-[0.2em] font-extrabold text-gray-400">
          NHẬN NGAY ƯU ĐÃI ĐẶC QUYỀN TỪ AMAC
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="field-label">
            HỌ VÀ TÊN
          </label>
          <input
            type="text"
            id="name"
            autoComplete="name"
            placeholder="NHẬP TÊN CỦA BẠN"
            className="field-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="phone" className="field-label">
            SỐ ĐIỆN THOẠI
          </label>
          <input
            type="tel"
            id="phone"
            autoComplete="tel"
            placeholder="+84 000 000 000"
            className="field-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {state === "ERROR" && (
          <div className="font-header text-red-600 text-[12px] font-bold tracking-tight text-center">
            {errorMessage}
          </div>
        )}

        <button
          type="button"
          onClick={handleAction}
          className="editorial-cta w-full justify-center mt-2 cursor-pointer border-none"
          disabled={state === "SUBMITTING"}
        >
          {state === "SUBMITTING" ? "ĐANG XỬ LÝ..." : "NHẬN VOUCHER NGAY"}
        </button>
      </div>
    </div>
  );
}
