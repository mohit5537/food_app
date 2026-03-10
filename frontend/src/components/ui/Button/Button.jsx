import classNames from "@/utils/commonUtils";

export default function Button({ title = "Button", className }) {
  return (
    <button
      type="submit"
      className={classNames(
        className,
        "button bg-[#751b30] w-full text-white px-4 py-2 rounded-md hover:bg-[#d01920] transition-colors duration-300",
      )}
    >
      {title}
    </button>
  );
}
