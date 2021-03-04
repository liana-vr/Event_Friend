import { makeAutoObservable } from "mobx";

interface Modal {
    open: boolean;
    body: JSX.Element | null;
    class:"scrolling content";
}

export default class ModalStore{
    modal: Modal = {
        open: false,
        body: null,
        class: "scrolling content"
    }

    constructor(){
        makeAutoObservable(this)
    }

    openModal = (content: JSX.Element) => {
        this.modal.open = true;
        this.modal.body = content;
        this.modal.class = 'scrolling content';
    }

    closeModal = () => {
        this.modal.open = false;
        this.modal.body = null;
    }
}