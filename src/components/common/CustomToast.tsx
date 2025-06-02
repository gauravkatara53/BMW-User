// components/CustomToast.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ToastType = "default" | "success" | "error" | "info" | "warning";

type ToastProps = {
  message: string;
  type?: ToastType;
  closeToast?: () => void;
};

// Tailwind classes for different toast types
const typeStyles: Record<ToastType, string> = {
  default: "bg-gray-100 border-gray-200 text-gray-800",
  success: "bg-teal-100 border-teal-200 text-teal-800",
  info: "bg-blue-100 border-blue-200 text-blue-800",
  error: "bg-red-100 border-red-200 text-red-800",
  warning: "bg-yellow-100 border-yellow-200 text-yellow-800",
};

export default function CustomToast({
  message,
  type = "default",
  closeToast,
}: ToastProps) {
  return (
    <div
      className={`max-w-xs border text-sm rounded-lg ${typeStyles[type]}`}
      role="alert"
      tabIndex={-1}
    >
      <div className="flex p-4">
        <span>{message}</span>
        <div className="ms-auto">
          <button
            type="button"
            onClick={closeToast}
            className={`inline-flex justify-center items-center size-5 rounded-lg opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 ${
              typeStyles[type].split(" ")[2]
            }`}
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <FontAwesomeIcon icon="xmark" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
