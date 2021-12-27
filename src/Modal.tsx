import { FunctionComponent, MutableRefObject, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRootElement = document.getElementById('modal');

const Modal: FunctionComponent = ({ children }) => {
    const elementRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
    
    if (!elementRef.current) {
        elementRef.current = document.createElement('div');
    };

    useEffect(() => {
        if (!modalRootElement || !elementRef.current) {
            return;
        }

        modalRootElement.appendChild(elementRef.current);
        // This will destory the ref
        // Using the non-null operator because we do a null check at the top of the effect
        return () => {
            modalRootElement.removeChild(elementRef.current!);
        }
    }, []);

    return createPortal(<div>{ children }</div>, elementRef.current);
}

export default Modal;