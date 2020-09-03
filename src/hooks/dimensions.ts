import {
  useRef,
  useState,
  MutableRefObject,
  useLayoutEffect,
  useMemo,
} from "react";

type ExtendedDOMRect = DOMRectReadOnly & { scrollWidth?: number };

export default function useDimensions<T extends HTMLElement>(): [
  MutableRefObject<any>,
  ExtendedDOMRect | null
] {
  const ref = useRef<T>(null);
  const [dimensions, setDimensions] = useState<ExtendedDOMRect | null>(null);

  const resizeObserver = useMemo(
    () =>
      new ResizeObserver(([entry]) =>
        setDimensions({
          ...entry.contentRect.toJSON(),
          scrollWidth: ref.current?.scrollWidth,
        })
      ),
    [setDimensions]
  );

  useLayoutEffect(() => {
    const current = ref.current; // enclose current so the reference can be used in the unsubscribe
    if (current) {
      resizeObserver.observe(current);
      return () => resizeObserver.unobserve(current);
    }

    return undefined;
  }, [resizeObserver]);

  return [ref, dimensions];
}
