import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

function ShadcnPopup() {
  return (
    <Dialog>
      <DialogTrigger className="bg-blue-500 text-white px-4 py-2 rounded">
        Open Popup
      </DialogTrigger>
      <DialogContent className="p-5 rounded">
        <p>This is a cool popup! 🎉</p>
      </DialogContent>
    </Dialog>
  );
}

export default ShadcnPopup;
