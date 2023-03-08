
import { Divider, Grid, TextField } from '@mui/material';
import React, { useReducer } from 'react'
import CalenderDatePicker from 'src/subComponents/CalenderDatePicker';
import Mark from 'src/subComponents/Mark';
import SelectUi from 'src/subComponents/SelectUi'
import styled from 'styled-components'

const ReservationCarsItem = (props) => {
  const { title,
    colorMark,
    style,
    reservationValue,
    onChangeSelectLocation,
    onChangeSelectDate,
    onChangeSelectTime } = props
  const times = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00"];
  const names = [
    "تهران",
    "شیراز",
    "تبریز",
    "سنندج",
    "مشهد",
    "اراک",
  ];
  return (
    <Wrapper style={style}>
      <TitleContainer>
        <Mark title={title} color={colorMark} />
        <Grid container spacing={1.5} sx={{ margin: 0, justifyContent: "space-between", width: "100%" }}>
          {/* === Location === */}
          <Grid item xs={4}>
            <SelectUi data={names} value={reservationValue?.location} onSelect={(value) => onChangeSelectLocation(value)} placeholder="انتخاب شهر خود" label="موقعیت مکانی" />
          </Grid>
          <Grid item xs={"auto"}>
            <Divider orientation="vertical" />
          </Grid>
          {/* === Date === */}
          <Grid item xs={3}>
            <CalenderDatePicker
              onChange={onChangeSelectDate}
              value={reservationValue?.date}
              customInput={
                <SelectUi
                  disabled
                  value={reservationValue?.date}
                  placeholder="انتخاب تاریخ"
                  label="تاریخ" />
              } />
          </Grid>
          <Grid item xs={"auto"}>
            <Divider orientation="vertical" />
          </Grid>
          {/* === Time === */}
          <Grid item xs={3}>
            <SelectUi data={times} value={reservationValue?.time} onSelect={(value) => onChangeSelectTime(value)} placeholder="انتخاب زمان" label="زمان" />
          </Grid>
        </Grid>
      </TitleContainer>
    </Wrapper>
  )
}

export default ReservationCarsItem
const Wrapper = styled.div`
flex:1;
background:#FFFFFF;
border-radius: 15px;
padding:26px 48px;
@media(max-width:768px){
    width: 100%;
    padding:25px;
    margin-top: 32px;
}
`
const TitleContainer = styled.div`

`
