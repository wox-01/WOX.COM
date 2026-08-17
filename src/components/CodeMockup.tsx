"use client";

import { useEffect, useState } from "react";

const CODE = `async def rag_query(question: str) -> str:
    # embed + retrieve top chunks
    chunks = await vector_search(
        question, top_k=5
    )
    context = assemble_context(chunks)
    return await llm.generate(
        prompt=question,
        context=context,
    )`;

const TOKEN_RE =
  /(#.*)|('[^']*'|"[^"]*")|(\b(?:async|def|return|await|import|from|class)\b)|(\b\d+\b)/g;

function highlight(line: string) {
  const nodes: { key: string; node: React.ReactNode }[] = [];
  const re = new RegExp(TOKEN_RE);
  let last = 0;
  let i = 0;
  let m: RegExpExecArray | null;

  while ((m = re.exec(line))) {
    if (m.index > last) nodes.push({ key: `t${i++}`, node: line.slice(last, m.index) });
    const [, comment, str, kw, num] = m;
    if (comment) nodes.push({ key: `t${i++}`, node: <span className="text-neutral-500">{comment}</span> });
    else if (str) nodes.push({ key: `t${i++}`, node: <span className="text-lime-400/80">{str}</span> });
    else if (kw) nodes.push({ key: `t${i++}`, node: <span className="text-teal-300">{kw}</span> });
    else if (num) nodes.push({ key: `t${i++}`, node: <span className="text-orange-400/80">{num}</span> });
    last = re.lastIndex;
    if (m.index === re.lastIndex) re.lastIndex++;
  }
  if (last < line.length) nodes.push({ key: `t${i++}`, node: line.slice(last) });
  return nodes;
}

export default function CodeMockup() {
  const [chars, setChars] = useState(0);
  const done = chars >= CODE.length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setChars(CODE.length);
      return;
    }
    if (done) return;
    const id = setTimeout(() => setChars((c) => c + 1), 18);
    return () => clearTimeout(id);
  }, [chars, done]);

  const lines = CODE.slice(0, chars).split("\n");

  return (
    <div className="relative w-full max-w-[560px]">
      <div
        className="pointer-events-none absolute -inset-10 -z-10 opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 40%, rgba(45,212,191,0.3), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b0b0d]/70 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)] backdrop-blur-md">
        <div className="flex items-center gap-3 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff5f57" }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#febc2e" }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#28c840" }} />
          </div>
          <span className="font-mono text-xs text-muted">rag_pipeline.py</span>
        </div>

        <div className="flex px-2 py-6 font-mono text-[13px] leading-relaxed sm:text-sm">
          <div className="select-none pr-4 text-right text-white/20">
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <div className="min-w-0 flex-1 text-foreground/90">
            {lines.map((line, i) => (
              <div key={i} className="whitespace-pre">
                {highlight(line).map((n) => (
                  <span key={n.key}>{n.node}</span>
                ))}
                {i === lines.length - 1 && (
                  <span className="animate-pulse text-teal-300">▍</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
