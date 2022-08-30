import cx from "clsx";
import { ja } from "date-fns/locale";
import ReactDatePicker, { registerLocale } from "react-datepicker";

registerLocale("ja", ja);

export function DatePicker({
  isClearable = false,
  showPopperArrow = true,
  showMonthDropdown = true,
  showYearDropdown = true,
  width = "w-full",
  isDisabled,
  cornerText,
  name,
  label = "Birthday",
  isInvalid,
  invalidText,
  selectedDate,
  onChange,
  isRequired,
  ref,
  ...rest
}): JSX.Element {
  return (
    <div className={cx(width)}>
      {label && (
        <div className="flex justify-between mb-1">
          <label
            className={cx("block text-gray-700 text-sm font-medium", {
              "opacity-30": isDisabled,
              "!text-red-500": isInvalid,
            })}
            htmlFor={name}
          >
            {label} {isRequired && <span className="text-founder">・</span>}
          </label>
          {cornerText && (
            <span className="text-gray-500 text-sm">{cornerText}</span>
          )}
        </div>
      )}

      <ReactDatePicker
        {...rest}
        ref={ref}
        dateFormat="yyyy/MM/dd"
        dateFormatCalendar="yo MMM"
        dropdownMode="select"
        isClearable={isClearable}
        locale="ja"
        selected={selectedDate}
        showMonthDropdown={showMonthDropdown}
        showPopperArrow={showPopperArrow}
        showYearDropdown={showYearDropdown}
        onChange={onChange}
      />

      {isInvalid && invalidText && (
        <p className="mt-2 text-red-600 text-sm" id={`${name}-error`}>
          {invalidText}
        </p>
      )}
    </div>
  );
}
