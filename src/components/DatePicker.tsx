import DatePicker from "tailwind-datepicker-react";
import { useState } from "react";

const options = {
  autoHide: true,
  todayBtn: true,
  clearBtn: false,
  maxDate: new Date("2030-01-01"),
  minDate: new Date("2014-01-01"),
  theme: {
    background: "bg-gray-100 dark:bg-gray-800",
    todayBtn: "green-700",
    clearBtn: "",
    icons: "bg-gray-100",
    text: "",
    disabledText: "",
    input: "",
    inputIcon: "",
    selected: "",
  },
  icons: {
    // () => ReactNode | JSX.Element
    prev: () => <span>Previous</span>,
    next: () => <span>Next</span>,
  },
  datepickerClassNames: "top-12",
  defaultDate: new Date(),
  language: "es",
};

export const Selector = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleChange = (selectedDate: Date) => {
    console.log(selectedDate);
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
