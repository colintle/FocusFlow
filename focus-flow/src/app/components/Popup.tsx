import { AiOutlineClose } from 'react-icons/ai';

interface PopupProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

function Popup({ title, children, onClose }: PopupProps) {
  return (
    <div className="relative z-10" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white shadow-xl">
            {title && (
              <div className="bg-orange-300 px-4 pt-5 sm:p-6 flex justify-between items-center">
                <h3
                  id="modal-title"
                  className="text-lg font-medium leading-6 text-white underline"
                >
                  {title}
                </h3>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                  <AiOutlineClose />
                </button>
              </div>
            )}

            <div className="px-4 py-4 sm:p-6">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
