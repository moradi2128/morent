import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const RatingUi = (props) => {
    const { label, onChange, readOnly = false, value = 0 } = props
    const [valueRating, setValueRating] = React.useState(value);

    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            {label && <Typography component="legend">{label}</Typography>}
            <Rating
                name="simple-controlled"
                value={valueRating}
                onChange={(event, newValue) => {
                    setValueRating(newValue);
                    typeof onChange == "function" && onChange(event, newValue)
                }}
                readOnly={readOnly}
            />
        </Box>
    );
}
export default RatingUi