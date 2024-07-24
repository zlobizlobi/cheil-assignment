import { Option } from "@/types";

interface CardColorOptionsProps {
  options?: Option[];
  currentOption: Option;
  onCheckedChange: (value: string) => void;
}

export function CardColorOptions({
  options,
  currentOption,
  onCheckedChange,
}: CardColorOptionsProps) {
  return (
    <div className="flex gap-x-5">
      {options?.map((option) => {
        const id = `${option.optionName}-${crypto.randomUUID()}`;

        return (
          <span className="relative">
            <input
              type="radio"
              id={id}
              className="peer w-[1px] h-[1px] absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              value={option.optionName}
              checked={option.optionName === currentOption.optionName}
              onChange={(event) => onCheckedChange(event.target.value)}
            />
            <label
              className="h-5 w-5 rounded-full flex justify-center items-center z-10 relative peer-checked:border peer-checked:border-black cursor-pointer"
              htmlFor={id}
            >
              <span
                className="rounded-full w-4 h-4"
                // The reason for inline styling here is that TailwindCSS doesn't support dynamic class generation.
                // Also CSS variables would have to be determined here dynamically, which wouldn't work.
                style={{
                  backgroundColor: option.optionCode,
                }}
              />
            </label>
          </span>
        );
      })}
    </div>
  );
}
