import { Switch } from "@headlessui/react";
import cx from "clsx";

export type ToggleProps = {
  label: string;
  description?: string;
  align: "right" | "left";
  checked: boolean;
  onChange: () => void;
};

export function Toggle({
  label,
  description,
  align,
  checked,
  onChange,
}: ToggleProps): JSX.Element {
  return (
    <Switch.Group
      as="div"
      className={cx("flex items-center ", {
        "justify-between": align === "right",
      })}
    >
      {align === "left" && (
        <Switch
          checked={checked}
          className={cx(
            checked ? "bg-primary-500" : "bg-gray-200",
            "focus:ring-primary-400 relative inline-flex flex-shrink-0 w-11 h-6 border-2 border-transparent rounded-full focus:outline-none cursor-pointer transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-offset-2"
          )}
          onChange={onChange}
        >
          <span
            aria-hidden="true"
            className={cx(
              checked ? "translate-x-5" : "translate-x-0",
              "inline-block w-5 h-5 bg-white rounded-full shadow pointer-events-none transform transition duration-200 ease-in-out ring-0"
            )}
          />
        </Switch>
      )}

      <span
        className={cx({
          "flex flex-col flex-grow": align === "right",
          "ml-3 block space-x-1": align === "left",
        })}
      >
        <Switch.Label
          as="span"
          className="text-gray-900 text-sm font-medium"
          {...(align === "right" && { passive: true })}
        >
          {label}
        </Switch.Label>
        {description && (
          <Switch.Description as="span" className="text-gray-500 text-sm">
            {description}
          </Switch.Description>
        )}
      </span>

      {align === "right" && (
        <Switch
          checked={checked}
          className={cx(
            checked ? "bg-primary-500" : "bg-gray-200",
            "focus:ring-primary-400 relative inline-flex flex-shrink-0 w-11 h-6 border-2 border-transparent rounded-full focus:outline-none cursor-pointer transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-offset-2"
          )}
          onChange={onChange}
        >
          <span
            aria-hidden="true"
            className={cx(
              checked ? "translate-x-5" : "translate-x-0",
              "inline-block w-5 h-5 bg-white rounded-full shadow pointer-events-none transform transition duration-200 ease-in-out ring-0"
            )}
          />
        </Switch>
      )}
    </Switch.Group>
  );
}
