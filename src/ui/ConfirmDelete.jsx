import { TrashIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import SubmitButton from "./SubmitButton";

function ConfirmDelete({ resourceName, onClose, disabled, onConfirm }) {
  const handleSubmit = async (formData) => {
    console.log("the function called");
    await onConfirm(formData);
  };
  return (
    <div>
      <h2 className="font-bold text-base mb-8 text-secondary-700">
        آیا از حذف {resourceName} مطمئن هستید؟
      </h2>
      <form action={handleSubmit}>
        <div className="flex justify-between items-center gap-x-16">
          <Button
            className="flex-1"
            variant="outline"
            onClick={onClose}
            type="button"
          >
            لغو
          </Button>
          <SubmitButton
            type="submit"
            disabled={disabled}
            variant="danger"
            className="flex gap-x-2 justify-center items-center flex-1"
          >
            <TrashIcon className="w-5" />
            <span>حذف</span>
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
export default ConfirmDelete;