export default interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    iconSrc: string;
    title: string;
    description: string;
    buttonText: string;
    buttonAction: () => void;
}