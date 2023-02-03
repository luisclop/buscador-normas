const { ipcRenderer } = require("electron");

export function TitleBar() {
  const handleClose = () => {
    ipcRenderer.send("close-window");
  };

  const handleMinimize = () => {
    ipcRenderer.send("minimize-window");
  };

  return (
    <div className="titlebar flex h-10 w-full items-center justify-end bg-green-700">
      <p className="pr-72 text-lg font-bold text-white">Buscador de Normas</p>
      <button
        className="window-control h-10 w-10 transition-all hover:bg-green-900"
        onClick={handleMinimize}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mx-auto h-6 w-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
        </svg>
      </button>
      <button
        className="window-control h-10 w-10 transition-all hover:bg-red-600"
        onClick={handleClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mx-auto h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
