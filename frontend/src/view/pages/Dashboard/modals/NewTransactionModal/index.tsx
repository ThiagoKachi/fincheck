import { DatePickerInput } from "../../../../components/DatePickerInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";
import { useNewTransactionModalController } from "./useNewTransactionModalController";

export function NewTransactionModal() {
  const {
    closeNewTransactionModal,
    isNewTransactionModalOpen,
    newTransactionType,
  } = useNewTransactionModalController();

  const isExpense = newTransactionType === 'EXPENSE';

  return (
    <Modal
      open={isNewTransactionModalOpen}
      title={isExpense ? 'Nova Despesa' : 'Nova Receita'}
      onClose={closeNewTransactionModal}
    >
      <form action="">
        <div>
          <span className="text-gray-600 text-xs">
            Valor {isExpense ? 'da despesa' : 'da receita'}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-lg">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder={isExpense ? 'Nome da despesa' : 'Nome da receita'}
          />

          <Select
            placeholder="Categoria"
            options={[
              { value: "CHECKING", label: "Conta Corrente" },
              { value: "INVESTMENT", label: "Investimentos" },
              { value: "CASH", label: "Dinheiro Físico" },
            ]}
          />

          <Select
            placeholder={isExpense ? 'Pagar com' : 'Receber com'}
            options={[
              { value: "CHECKING", label: "Conta Corrente" },
              { value: "INVESTMENT", label: "Investimentos" },
              { value: "CASH", label: "Dinheiro Físico" },
            ]}
          />

          <DatePickerInput />

        </div>
      </form>
    </Modal>
  )
}
