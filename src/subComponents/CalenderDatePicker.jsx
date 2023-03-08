import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import InputUi from "./InputUi";
const CalenderDatePicker = (props) => {
    const { label, placeholder, onChange, value, error = false, errorMessage, data, datePicker = false, inputStyle, customInput } = props
    const [valueCalendar, setValueCalendar] = useState(placeholder);
    const handleChange = (value) => {
        typeof onChange == "function" && onChange(value)
        setValueCalendar(value)
    }
    const DefalutInput = ({ openCalendar, value, handleValueChange }) => {
        return (
            <InputUi styleContainer={inputStyle} icon onClick={openCalendar} errorMessage={errorMessage} error={error}
                value={value}
                label={label} name={label} id={label} placeholder={placeholder} />
        )
    }
    return (
        <DatePicker
            containerStyle={{ width: "100%" }}
            value={valueCalendar}
            onChange={handleChange}
            calendar={persian}
            locale={persian_fa}
            minDate={new Date()}
            format="MM/DD"
            render={customInput ? customInput : <DefalutInput />}
        />

    )
}

export default CalenderDatePicker