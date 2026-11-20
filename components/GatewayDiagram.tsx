const steps = [
  { label: "client", note: "any request" },
  { label: "Kong", note: "DB-less · kong.yml" },
  { label: "rate limit", note: "5 req / min" },
  { label: "FastAPI", note: "AI service" },
];

/** Stand-in for a screenshot: the gateway's request path and where excess traffic stops. */
const GatewayDiagram = () => {
  return (
    <div
      role="img"
      aria-label="Secure AI proxy gateway: requests reach a DB-less Kong gateway configured by a declarative file. Kong's rate-limiting plugin allows 5 requests per minute through to the FastAPI AI service. Anything over the limit is rejected at the gateway and never reaches the backend or the LLM."
      className="flex h-full w-full flex-col justify-center gap-4 bg-[#0F172A] p-5 font-mono text-[11px] text-slate-300 @lg:gap-5 @lg:p-8 @lg:text-xs"
    >
      <p className="hidden text-slate-500 @sm:block">{"// request path"}</p>
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
        {"// over the limit: "}
        <span className="text-slate-300">429 at the edge · never reaches the backend or LLM</span>
      </p>
    </div>
  );
};

export default GatewayDiagram;
