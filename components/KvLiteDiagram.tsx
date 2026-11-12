const steps = [
  { label: "put(k, v)", note: "client write" },
  { label: "WAL append", note: "CRC32 · timestamp · length" },
  { label: "fsync", note: "durable on disk" },
  { label: "memory index", note: "sync.RWMutex" },
  { label: "SSTable", note: "sorted, immutable" },
];

/** Stand-in for a screenshot: KV-Lite's write path, which is the interesting part. */
const KvLiteDiagram = () => {
  return (
    <div
      role="img"
      aria-label="KV-Lite write path: a put is appended to the write-ahead log with a CRC32 checksum, fsynced to disk, then applied to the in-memory index and later flushed to an SSTable. On restart, the log is replayed and corrupt records are skipped."
      className="flex h-full w-full flex-col justify-center gap-4 bg-[#0F172A] p-5 font-mono text-[11px] text-slate-300 @lg:gap-5 @lg:p-8 @lg:text-xs"
    >
      <p className="hidden text-slate-500 @sm:block">{"// write path"}</p>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-3">
        {steps.map((step, i) => (
          <li key={step.label} className="flex items-center gap-2">
            {i > 0 && (
              <span aria-hidden className="text-emerald-400">
                →
              </span>
            )}
            <span className="flex flex-col rounded-lg border border-slate-700 bg-slate-800/60 px-2.5 py-1.5">
              <span className="text-slate-100">{step.label}</span>
              <span className="hidden text-[10px] text-slate-500 @lg:block">{step.note}</span>
            </span>
          </li>
        ))}
      </ol>
      <p className="hidden text-slate-500 @md:block">
        {"// on restart: "}
        <span className="text-slate-300">replay WAL → verify CRC → skip corrupt tail</span>
      </p>
    </div>
  );
};

export default KvLiteDiagram;
