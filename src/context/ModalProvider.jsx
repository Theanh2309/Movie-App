import { createContext, useContext, useEffect, useState } from "react";

export const ModalContext = createContext();

// export const useModalContext = ()=>{
//   return useContext(ModalContext)
// }
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

  const openPopup = (content) => {
    setIsShowing(true);
    setContent(content);
  };
  return (
    <ModalContext.Provider value={{ openPopup }}>
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
