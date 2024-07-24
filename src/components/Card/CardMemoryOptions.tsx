import { Option } from "@/types";

interface CardMemoryOptionsProps {
  options?: Option[];
  currentOption: Option;
  onCheckedChange: (value: string) => void;
}

export function CardMemoryOptions({
  options,
  currentOption,
  onCheckedChange,
}: CardMemoryOptionsProps) {
  return (
    <div className="flex gap-x-5">
      {options?.map((option) => {
        const id = `${option.optionName}-${crypto.randomUUID()}`;

        return (
          <span className="relative box-border">
            <input
              type="radio"
              id={id}
              className="peer w-[1px] h-[1px] absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              value={option.optionName}
              checked={option.optionName === currentOption.optionName}
              onChange={(event) => onCheckedChange(event.target.value)}
            />
            <label
              className="px-2.5 py-1 h-7 bg-white rounded-3xl flex justify-center items-center z-10 relative border border-transparent peer-checked:border peer-checked:border-black cursor-pointer"
              htmlFor={id}
            >
              <p className="text-xs">{option.optionLocalName}</p>
            </label>
          </span>
        );
      })}
    </div>
  );
}
