import React from "react";

export default function Footer({ dict }) {
  return (
    <div className="dark:text-neutral-400">
      &copy; {new Date().getFullYear()} Mimelek.com
    </div>
  );
}
