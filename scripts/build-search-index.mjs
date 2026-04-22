import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises'
import { join, basename, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const entries = [
  { dir: 'content/guide', prefix: '/guide' },
  { dir: 'content/appendix', prefix: '/appendix' },
]

function stripMdx(src) {
  return src
    .replace(/^---[\s\S]*?---/m, '')           // frontmatter
    .replace(/^import\s.*$/gm, '')             // import statements
    .replace(/<[A-Z][^>]*\/>/g, '')            // self-closing JSX
    .replace(/<[A-Z][^>]*>[\s\S]*?<\/[A-Z][^>]*>/g, '') // JSX blocks
    .replace(/!\[.*?\]\(.*?\)/g, '')           // images
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')  // links → text
    .replace(/```[\s\S]*?```/g, '')            // fenced code blocks
    .replace(/`[^`]+`/g, '')                   // inline code
    .replace(/^\s*[|].*[|]\s*$/gm, '')        // table rows
    .replace(/^\s*[-:]+\s*[|].*$/gm, '')      // table separators
    .replace(/^#{1,6}\s+/gm, '')              // heading markers
    .replace(/\*\*([^*]+)\*\*/g, '$1')        // bold
    .replace(/\*([^*]+)\*/g, '$1')            // italic
    .replace(/^\s*[-*+]\s+/gm, '')            // list markers
    .replace(/^\s*\d+\.\s+/gm, '')            // ordered list markers
    .replace(/^\s*>\s+/gm, '')                // blockquotes
    .replace(/\n{3,}/g, '\n\n')               // excess blank lines
    .trim()
}

function extractTitle(src) {
  const m = src.match(/^#\s+(.+)$/m)
  return m ? m[1].trim() : 'Untitled'
}

function fileToSlug(filename, prefix) {
  return `${prefix}/${basename(filename, '.mdx')}`
}

let id = 0
const docs = []

for (const { dir, prefix } of entries) {
  const dirPath = join(root, dir)
  let files
  try {
    files = await readdir(dirPath)
  } catch {
    continue
  }
  for (const file of files.filter(f => f.endsWith('.mdx')).sort()) {
    const src = await readFile(join(dirPath, file), 'utf8')
    const title = extractTitle(src)
    const body = stripMdx(src).slice(0, 10000)
    const slug = fileToSlug(file, prefix)
    docs.push({ id: id++, title, slug, body })
  }
}

const publicDir = join(root, 'public')
await mkdir(publicDir, { recursive: true })
await writeFile(join(publicDir, 'search-index.json'), JSON.stringify(docs, null, 2))
console.log(`Search index: ${docs.length} documents → public/search-index.json`)
