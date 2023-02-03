import DatePicker from "tailwind-datepicker-react";
import { useState } from "react";

const options = {
  autoHide: true,
  todayBtn: false,
  clearBtn: false,
  maxDate: new Date(),
  minDate: new Date("2014-01-01"),
  theme: {
    background: "bg-gray-100 dark:bg-gray-800",
    todayBtn: "bg-green-700 hover:bg-green-800",
    clearBtn: "",
    icons: "bg-gray-100",
    text: "",
    disabledText: "text-gray-400",
    input: "",
    inputIcon: "",
    selected: "bg-green-700 hover:bg-green-700 text-gray-100",
  },
  icons: {
    // () => ReactNode | JSX.Element
    prev: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
    ),
    next: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    ),
  },
  datepickerClassNames: "top-72",
  defaultDate: new Date(),
  language: "es",
};

export const Selector = (props: { onSelectedDate: (date: Date) => void }) => {
  const [show, setShow] = useState<boolean>(false);

  const handleChange = (selectedDate: Date) => {
    props.onSelectedDate(selectedDate);
  };

  const handleClose = (state: boolean) => {
    setShow(state);
  };

  return (
    <div>
      <DatePicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      />
    </div>
  );
};
