import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

let modalRootElement;

const Modal = ({ children }) => {
    modalRootElement = modalRootElement ? modalRootElement : document.getElementById('modal');

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