"use client";

import { CopyIcon, CheckmarkIcon } from "./icons";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import clsx from "clsx";

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
      className="relative grid place-items-center size-10 p-2 hover:bg-white/5 rounded-lg transition cursor-pointer"
    >
      <CheckmarkIcon
        className={clsx(
          "absolute transition-all duration-200",
          copied ? "opacity-100 scale-100" : "opacity-0 scale-0"
        )}
      />
      <CopyIcon
        className={clsx(
          "absolute transition-all duration-200",
          copied ? "opacity-0 scale-75" : "opacity-100 scale-100"
        )}
      />
      <Toaster position="bottom-center" richColors />
    </button>
  );
}
