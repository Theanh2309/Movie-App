import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  // global state
  const [isShowing, setIsShowing] = useState(false);
  // content show
  const [content, setContent] = useState();
  useEffect(() => {
    if (isShowing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isShowing]);
  return (
    <ModalContext.Provider value={{ setIsShowing, setContent }}>
      {/* app */}
      {children}
      {isShowing && (
        <div className="fixed inset-0">
          <div
            onClick={() => setIsShowing(false)}
            className="absolute inset-0 flex items-center justify-center bg-slate-600/60"
          >
            {content}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};
export default ModalProvider;
