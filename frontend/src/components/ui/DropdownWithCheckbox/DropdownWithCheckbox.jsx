import classNames from "@/utils/commonUtils";
import React from "react";

const DropdownWithCheckbox = ({
  items = [],
  name = "",
  mutiple = false,
  className = "",
  ...props
}) => {
  return (
    <select
      name={name}
      multiple={mutiple}
      className={classNames(
        className,
        "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2",
      )}
      {...props}
    >
      <option value="">(select option)</option>
      {items.length &&
        items.map((item, idx) => {
          const label = item.name ?? item.title;
          const value = item.value ?? item.key;
          return (
            <option value={value} key={value}>
              <input type="checkbox" value={value} />
              {label}
            </option>
          );
        })}
    </select>
  );
};

export default DropdownWithCheckbox;
