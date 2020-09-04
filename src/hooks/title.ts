import { useEffect } from "react";

interface TitleHookOpts {
  hyphen?: boolean;
  replace?: boolean;
}

export default function useTitle(title: string, opts: TitleHookOpts = {}) {
  useEffect(() => {
    document.title =
      (opts.replace ? "" : "Bestoff " + (opts.hyphen ? "- " : "")) + title;
  }, [title, opts.hyphen, opts.replace]);
}
