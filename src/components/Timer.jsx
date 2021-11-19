import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Timer = (props) => {

    const {time, timerSeconds, setTimerSeconds, resetTimer} = props

    if(timerSeconds===0){
        setTimerSeconds(time * 60)
    }

    let trueMinutes = Math.floor(timerSeconds / 60)
    let trueSeconds = timerSeconds % 60

    if(trueSeconds < 10) {
        trueSeconds = "0" + trueSeconds
    }    
    
    if(trueMinutes < 10) {
        trueMinutes = "0" + trueMinutes
    }

    return (
        <>
            <Box mb={5}>
                <Paper sx={{p:3}}>
                    <Typography>Drink water in...</Typography>
                    <Typography variant='h1'>{trueMinutes} : {trueSeconds} </Typography>
                    <Box display='flex' alignItems='center' justifyContent='space-around' pb={1}>
                        <Typography>Minutes</Typography>
                        <Typography>Seconds</Typography>
                    </Box>
                </Paper>
                <Box display='flex' alignItems='center' justifyContent='space-around'>
                    <Button variant='contained' color='error' sx={{my:3, width:[125,150,200,250]}} onClick={resetTimer}>Reset</Button>
                </Box>
            </Box>
        </>
    )
}


export default Timer
