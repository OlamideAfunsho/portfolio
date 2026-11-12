"use client";

import { useSyncExternalStore } from "react";

const formatLagosTime = () =>
  new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Africa/Lagos",
  });

// Re-check every 15s; React only re-renders when the minute actually changes.
const subscribe = (onChange: () => void) => {
  const id = setInterval(onChange, 15_000);
  return () => clearInterval(id);
};

// Nothing on the server, so there is no hydration mismatch.
const getServerSnapshot = () => null;

export default function LagosClock() {
  const time = useSyncExternalStore(subscribe, formatLagosTime, getServerSnapshot);

  return (
    <p className="hidden min-[360px]:block shrink-0 whitespace-nowrap font-mono text-xs tabular-nums text-[#52525B] sm:text-sm">
      <span className="hidden sm:inline">Lagos · </span>
      <span className="sr-only sm:hidden">Local time in Lagos: </span>
      <time>{time ?? "--:-- --"}</time>
    </p>
  );
}
