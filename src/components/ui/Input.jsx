import clsx from "clsx";

const Input = ({
  label,
  error,
  type = "text",
  className,
  ...props
}) => {
  const baseStyles =
    "w-full rounded-lg border px-4 py-2 text-sm text-textPrimary placeholder:text-textMuted focus:outline-none focus:ring-2 focus:ring-primary/40";

  const stateStyles = error
    ? "border-error focus:ring-error/40"
    : "border-border focus:border-primary";

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-textPrimary">
          {label}
        </label>
      )}

      <input
        type={type}
        className={clsx(baseStyles, stateStyles, className)}
        {...props}
      />

      {error && (
        <span className="text-xs text-error">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;