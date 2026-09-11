import Link from 'next/link'
import type { ReactNode } from 'react'
import type { ArticleBlock, ArticleSection } from '@/lib/articles/types'

/**
 * Renders inline text with minimal markup support:
 * [text](/intern-lank) for internal links and **text** for bold.
 */
export function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }
    if (match[1] !== undefined && match[2] !== undefined) {
      nodes.push(
        <Link key={key++} href={match[2]} className="font-medium text-brand-700 underline decoration-brand-300 underline-offset-2 transition-colors hover:text-brand-800 hover:decoration-brand-500">
          {match[1]}
        </Link>
      )
    } else if (match[3] !== undefined) {
      nodes.push(
        <strong key={key++} className="font-semibold text-dark-900">
          {match[3]}
        </strong>
      )
    }
    lastIndex = pattern.lastIndex
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }
  return nodes
}

function Block({ block }: { block: ArticleBlock }) {
  if (block.type === 'p') {
    return <p className="mt-4 leading-relaxed text-dark-600">{renderInline(block.text)}</p>
  }
  if (block.type === 'list') {
    const items = block.items.map((item, i) => (
      <li key={i} className="leading-relaxed text-dark-600">
        {renderInline(item)}
      </li>
    ))
    return block.ordered ? (
      <ol className="mt-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-brand-700">{items}</ol>
    ) : (
      <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-brand-500">{items}</ul>
    )
  }
  return (
    <div className="mt-5 overflow-x-auto rounded-xl border border-dark-100">
      <table className="w-full min-w-[28rem] border-collapse text-sm">
        {block.caption && <caption className="sr-only">{block.caption}</caption>}
        <thead>
          <tr className="bg-dark-50 text-left">
            {block.headers.map((h, i) => (
              <th key={i} scope="col" className="px-4 py-3 font-semibold text-dark-900">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, i) => (
            <tr key={i} className="border-t border-dark-100">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 align-top text-dark-600">
                  {renderInline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function ArticleBody({ sections }: { sections: ArticleSection[] }) {
  return (
    <>
      {sections.map((section, i) => (
        <section key={i} className="mt-10">
          <h2 className="text-heading-sm font-bold text-dark-900">{section.heading}</h2>
          {section.blocks.map((block, j) => (
            <Block key={j} block={block} />
          ))}
        </section>
      ))}
    </>
  )
}
