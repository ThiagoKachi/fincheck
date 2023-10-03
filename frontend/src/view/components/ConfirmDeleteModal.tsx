import { Button } from "./Button";
import { Modal } from "./Modal";
import { TrashIcon } from "./icons/TrashIcon";

interface ConfirmDeleteModalProps {
  onConfirm: () => void;
  onClose: () => void;
  title: string;
  description?: string;
  isLoading: boolean;
}

export function ConfirmDeleteModal({ onConfirm, onClose, title, description, isLoading }: ConfirmDeleteModalProps) {
  return (
    <Modal
      open={true}
      title="Excluir"
      onClose={onClose}
    >
      <div className="flex flex-col items-center text-center gap-6">
        <div className="w-[52px] h-[52px] rounded-full bg-red-50 flex items-center justify-center">
          <TrashIcon className="w-6 h-6 text-red-900" />
        </div>

        <p className="w-[185px] text-gray-800 font-bold">{title}</p>

        {description && (
          <p className="text-gray-800">{description}</p>
        )}
      </div>

      <div className="mt-10 space-y-4">
        <Button
          className="w-full"
          variant="danger"
          onClick={onConfirm}
          isLoading={isLoading}
        >
          Sim, desejo excluir
        </Button>
        <Button
          className="w-full"
          variant="ghost"
          onClick={onClose}
          disabled={isLoading}
        >
          Cancelar
        </Button>
      </div>
    </Modal>
  )
}
