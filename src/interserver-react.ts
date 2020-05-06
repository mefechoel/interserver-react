import { useState, useEffect, useRef, SetStateAction, Dispatch } from "react";
import interserver, { InterserverOptions } from "interserver";

/**
 * `isIntersecting` is `true` if the container is intersecting the viewport.
 * `setRef` is the function to pass to the ref prop of the container component.
 */
export interface UseInterserverResult {
  isIntersecting: boolean;
  setRef: Dispatch<SetStateAction<Element | null>>;
}

/**
 * A react hook, that exposes the visibility of a container element.
 *
 * @param options The observer options,
 * consisting of offset margins for the container (`top`, `right`, `bottom`, `left`)
 * and `once`. With `once` set to `true`,
 * observing stops after the element is first intersecting.
 *
 * @returns The `UseInterserverResult`
 * `UseInterserverResult.isIntersecting` is `true` if the container is intersecting the viewport.
 * `UseInterserverResult.setRef` is the function to pass to the ref prop of the container component.
 */
function useInterserver(options?: InterserverOptions): UseInterserverResult {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [container, setContainer] = useState<Element | null>(null);
  const prevContainerRef = useRef<Element | null>(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (container && container !== prevContainerRef.current) {
      prevContainerRef.current = container;
      const unobserve = interserver(container, setIsIntersecting, options);
      return unobserve;
    }
  }, [container, options]);

  return { isIntersecting, setRef: setContainer };
}

export default useInterserver;
