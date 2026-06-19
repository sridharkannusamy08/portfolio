import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-heading text-4xl font-bold tracking-tighter text-white mt-10 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-heading text-3xl font-bold tracking-tighter text-white mt-8 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-heading text-2xl font-bold text-white mt-6 mb-2">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-white/70 leading-relaxed mb-4">{children}</p>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-primary hover:text-primary-light underline underline-offset-4 transition-colors">
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-white/70">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-white/70">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-primary/5 rounded-r-xl italic text-white/60">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-white/10 rounded px-2 py-0.5 text-sm font-mono text-primary-lighter">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-white/5 border border-white/10 rounded-xl p-6 overflow-x-auto mb-6 text-sm">
        {children}
      </pre>
    ),
    hr: () => <hr className="border-white/10 my-8" />,
    strong: ({ children }) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    ...components,
  };
}
