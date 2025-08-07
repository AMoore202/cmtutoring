"use client";

import { CopyIcon, CheckmarkIcon } from "./icons";
import { useState } from "react";
import { toast, Toaster } from "sonner";

export default function CopyButton() {
  const email = "teachercolleenm@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      console.log("Email copied to clipboard:", email);
      setTimeout(() => setCopied(false), 2000); // reset after 2s
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center p-2 hover:bg-white/5 rounded-lg transition cursor-pointer"
    >
      {copied ? <CheckmarkIcon /> : <CopyIcon />}
      <Toaster position="bottom-center" richColors />
    </button>
  );
}
