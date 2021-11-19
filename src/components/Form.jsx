import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { FormControl } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';



const Form = (props) => {

    const {time, setTime, submitHandler} = props

    return (
        <Box display='flex' justifyContent='center' alignItems='center' mb={5}>
            <Paper elevation={24} sx={{height:250, px:5, display:'flex', alignItems:'center', justifyContent:'center', opacity:'95%', borderRadius:'15px'}}>
                    <form onSubmit={submitHandler}>
                        <FormControl sx={{width:{xs:300, sm:350, md:450, lg:500}}}>
                            <TextField variant="filled" color='primary' select required label='Select time interval' onChange={(event) => {
                                setTime(event.target.value)
                            } }>
                                <MenuItem value={20}>
                                    20 Minutes
                                </MenuItem>
                                <MenuItem value={30}>
                                    30 Minutes
                                </MenuItem>
                                <MenuItem value={45}>
                                    45 Minutes
                                </MenuItem>
                                <MenuItem value={60}>
                                    1 Hour
                                </MenuItem>
                            </TextField>
                            <Button type='submit' variant='contained' color='secondary' sx={{mt:1, color:'white'}}>
                                Start Timer
                            </Button>
                        </FormControl>
                    </form>
            </Paper>
        </Box>
    )
}

export default Form
