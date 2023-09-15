import { PropsWithChildren, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

export const ReactPortal = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const portalElement = document.createElement("div");
    document.body.appendChild(portalElement);
    setPortalElement(portalElement);

    return () => {
      document.body.removeChild(portalElement);
    };
  }, [setPortalElement]);

  return portalElement && createPortal(children, portalElement);
};
