import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRootElement = document.getElementById('modal');

const Modal = ({ children }) => {
    const elementRef = useRef(null);
    
    if (!elementRef.current) {
        elementRef.current = document.createElement('div');
    };

    useEffect(() => {
        modalRootElement.appendChild(elementRef.current);
        // This will destory the ref
        return () => modalRootElement.removeChild(elementRef.current);
    }, []);

    return createPortal(<div>{ children }</div>, elementRef.current);
}

export default Modal;