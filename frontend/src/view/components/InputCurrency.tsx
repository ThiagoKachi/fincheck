import { CrossCircledIcon } from "@radix-ui/react-icons";
import { NumericFormat } from "react-number-format";

interface InputCurrencyProps {
  error?: string;
  onChange?: (value: string) => void;
  value: string;
}

export function InputCurrency({ error, onChange, value }: InputCurrencyProps) {
  return (
    <div>
      <NumericFormat
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        className="text-[32px] font-bold text-gray-800 outline-none w-full"
        // decimalSeparator=","
        // thousandSeparator="."
      />

      {error && (
        <div className="flex gap-2 items-center mt-2 text-red-900">
          <CrossCircledIcon />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  );
}
