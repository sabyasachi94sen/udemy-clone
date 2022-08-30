import { RadioGroup as HUIRadioGroup } from "@headlessui/react";
import cx from "clsx";

type Option = { label: string; description?: string };

export type RadioGroupProps = {
  options: Option[];
  onChange: () => void;
  value: Option;
  valueKey: string;
  labelKey?: string;
  descriptionKey?: string;
};

export function RadioGroup({
  value,
  valueKey = "name",
  labelKey = "label",
  descriptionKey = "description",
  options,
  onChange = () => {},
}: RadioGroupProps): JSX.Element {
  return (
    <HUIRadioGroup value={value} onChange={onChange}>
      <HUIRadioGroup.Label className="sr-only">
        Privacy option
      </HUIRadioGroup.Label>
      <div className="bg-white rounded-md -space-y-px">
        {options.map((option, optionIdx) => (
          <HUIRadioGroup.Option
            key={option[valueKey]}
            className={({ checked }) =>
              cx(
                optionIdx === 0 ? "rounded-tl-md rounded-tr-md" : "",
                optionIdx === options.length - 1
                  ? "rounded-bl-md rounded-br-md"
                  : "",
                checked
                  ? "bg-indigo-50 border-indigo-200 z-10"
                  : "border-gray-200",
                "relative flex p-4 border focus:outline-none cursor-pointer"
              )
            }
            value={option}
          >
            {({ active, checked }) => (
              <>
                <span
                  aria-hidden="true"
                  className={cx(
                    checked
                      ? "bg-indigo-600 border-transparent"
                      : "bg-white border-gray-300",
                    active ? "ring-2 ring-offset-2 ring-indigo-500" : "",
                    "flex items-center justify-center mt-0.5 w-4 h-4 border rounded-full cursor-pointer"
                  )}
                >
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                </span>
                <div className="flex flex-col ml-3">
                  <HUIRadioGroup.Label
                    as="span"
                    className={cx(
                      checked ? "text-indigo-900" : "text-gray-900",
                      "block text-sm font-medium"
                    )}
                  >
                    {option[labelKey]}
                  </HUIRadioGroup.Label>
                  {descriptionKey && (
                    <HUIRadioGroup.Description
                      as="span"
                      className={cx(
                        checked ? "text-indigo-700" : "text-gray-500",
                        "block text-sm"
                      )}
                    >
                      {option[descriptionKey]}
                    </HUIRadioGroup.Description>
                  )}
                </div>
              </>
            )}
          </HUIRadioGroup.Option>
        ))}
      </div>
    </HUIRadioGroup>
  );
}
