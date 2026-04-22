interface ScreenshotProps {
  src: string
  caption?: string
  alt?: string
}

export function Screenshot({ src, caption, alt }: ScreenshotProps) {
  return (
    <figure className="my-8">
      <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt || caption || 'Screenshot'} className="w-full" />
        ) : (
          <div className="aspect-video flex items-center justify-center text-slate-400 dark:text-slate-500">
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-2 w-12 h-12 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">Screenshot placeholder</p>
              {caption && <p className="text-xs mt-1 opacity-60">{caption}</p>}
            </div>
          </div>
        )}
      </div>
      {caption && <figcaption className="mt-2 text-sm text-center text-slate-500 dark:text-slate-400">{caption}</figcaption>}
    </figure>
  )
}
