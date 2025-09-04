import React from "react";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormModal = ({ isOpen, onClose }: FormModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="pt-24 px-4 md:px-6">
      {/* Botão fechar */}
      <button
        onClick={onClose}
        className="mb-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
      >
        Fechar Formulário
      </button>

      {/* Iframe do Google Form */}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeYI-JcNW2ILA1bRSGfGCbumCh6YgD8Syr0dpORqYp97zGsFQ/viewform?embedded=true"
        width="100%"
        height="1108"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        className="w-full"
      />
    </div>
  );
};

export default FormModal;
