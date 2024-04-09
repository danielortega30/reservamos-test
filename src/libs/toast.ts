import { toast } from "sonner";

export const toastSuccess = (
  title: string,
  description = "",
  position: "top-center" = "top-center"
) => {
  return toast.success(title, { description, position, className: "toast" });
};

export const toastError = (
  title: string,
  description = "",
  position: "top-center" = "top-center"
) => {
  return toast.error(title, { description, position, className: "toast" });
};
