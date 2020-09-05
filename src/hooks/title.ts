import { useEffect } from "react";

interface TitleHookOpts {
  hyphen?: boolean;
  replace?: boolean;
}

export default function useTitle(title?: string, opts: TitleHookOpts = {}) {
  useEffect(() => {
    document.title = !!title
      ? (opts.replace ? "" : "Bestoff " + (opts.hyphen ? "- " : "")) + title
      : "Bestoff";
  }, [title, opts.hyphen, opts.replace]);
}
