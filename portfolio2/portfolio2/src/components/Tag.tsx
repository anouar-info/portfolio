export function Tag(
    { tag, count }: { tag: string; count: number }
  ) {
    return (
      <a
        href={`/tags/${tag.split(" ").join("-").toLowerCase()}`}
        className="rounded-full px-3 py-1 text-sm bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-100 hover:bg-sky-200 dark:hover:bg-sky-800 transition"
      >
        {tag} <span className="opacity-60">({count})</span>
      </a>
    );
  }
  