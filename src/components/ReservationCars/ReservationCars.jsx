import React, { useReducer } from 'react'
import ReservationCarsItem from './ReservationCarsItem'
import styled from 'styled-components'
import ButtonUi from 'src/subComponents/ButtonUi'
import {
    ArrowsUpDownIcon
} from '@heroicons/react/24/outline'
import IconUi from 'src/subComponents/IconUi'
const ReservationCars = () => {
    const [reservationValue, updateReservationValue] = useReducer((event, action) => {
        const newEvent = { ...event }
        switch (action.type) {
            case "updateLocation":
                newEvent.location = action.value
                break;
            case "updateDate":
                newEvent.date = action.value
                break;
            case "updateTime":
                newEvent.time = action.value
                break;
            case "updateLocationDropOff":
                newEvent.locationDropOff = action.value
                break;
            case "updateDateDropOff":
                newEvent.dateDropOff = action.value
                break;
            case "updateTimeDropOff":
                newEvent.timeDropOff = action.value
                break;
            case "swap":
                const _newEvent = { ...event }
                newEvent.location = _newEvent.locationDropOff;
                newEvent.date = _newEvent.dateDropOff;
                newEvent.time = _newEvent.timeDropOff;
                // === DropOff ===
                newEvent.locationDropOff = _newEvent.location;
                newEvent.dateDropOff = _newEvent.date;
                newEvent.timeDropOff = _newEvent.time;
                break;
            default:
                break;
        }
        return newEvent
    }, {
        location: "",
        date: "",
        time: "",
        locationDropOff: "",
        dateDropOff: "",
        timeDropOff: "",
    }
    )

    const updateReservationValuesHandler = (value, type) => {
        updateReservationValue({
            type,
            value
        })
    }
    const onChangeSelectLocation = (value) => {
        updateReservationValuesHandler(value, "updateLocation")
    }
    const onChangeSelectDate = (value) => {
        const date = value.format("YYYY/MM/DD")
        updateReservationValuesHandler(date, "updateDate")
    }
    const onChangeSelectTime = (value) => {
        updateReservationValuesHandler(value, "updateTime")
    }
    const onChangeSelectLocationDropOff = (value) => {
        updateReservationValuesHandler(value, "updateLocationDropOff")
    }
    const onChangeSelectDateDropOff = (value) => {
        const date = value.format("YYYY/MM/DD")
        updateReservationValuesHandler(date, "updateDateDropOff")
    }
    const onChangeSelectTimeDropOff = (value) => {
        updateReservationValuesHandler(value, "updateTimeDropOff")
    }

    // === reverse date handler ===
    const swap = () => {
        updateReservationValuesHandler({}, "swap")
    }
    return (
        <Wrapper>
            {/* === Pick Up === */}
            <ReservationCarsItem
                title="شروع رزرو"
                reservationValue={reservationValue}
                onChangeSelectLocation={onChangeSelectLocation}
                onChangeSelectDate={onChangeSelectDate}
                onChangeSelectTime={onChangeSelectTime} />
            {/* === Change Btn === */}
            <BtnUi onClick={() => swap()}>
                <IconUi >
                    <ArrowsUpDownIcon />
                </IconUi>
            </BtnUi>
            {/* === Drop Off === */}
            <ReservationCarsItem
                title="پایان رزرو"
                colorMark="secondary"
                reservationValue={{
                    location: reservationValue.locationDropOff,
                    date: reservationValue.dateDropOff,
                    time: reservationValue.timeDropOff,
                }}
                onChangeSelectLocation={onChangeSelectLocationDropOff}
                onChangeSelectDate={onChangeSelectDateDropOff}
                onChangeSelectTime={onChangeSelectTimeDropOff}
            />
        </Wrapper>
    )
}

export default ReservationCars

const Wrapper = styled.div`
display:flex;
padding:24px 0;
gap:44px;
justify-content:"space-between";
align-items:center;
position: relative;
@media(max-width:768px){
  flex-direction:column;
  gap:0;
}
`
const BtnUi = styled(ButtonUi)`
 height: 60px;
 width: 60px ;
  border-radius: 10px;
@media(max-width:768px){
    z-index: 1;
    position: absolute;
    top: 46%;
}
`