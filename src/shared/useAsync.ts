import { use, useCallback, useEffect, useRef, useState } from "react";

export default function useAsync<Type>(
  fn: (initial: boolean) => Promise<Type>,
  deps: unknown[] = []
): [Type | undefined, { refresh: () => void }] {
  const fnRef = useRef(fn);
  fnRef.current = fn;

  const [promise, setPromise] = useState<Promise<Type>>();

  useEffect(() => {
    setPromise(fnRef.current(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  const refresh = useCallback(() => {
    setPromise(fnRef.current(false));
  }, []);

  const value = promise && use(promise);

  return [value, { refresh }];
}

//test