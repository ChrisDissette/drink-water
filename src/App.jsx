import Form from './components/Form'
import Facts from './components/Facts'
import Timer from './components/Timer'

import {useState} from 'react'

import useSound from 'use-sound';
import Water from './audio/water.mp3'
import Voice from './audio/synthesize.mp3'

import Box from '@mui/material/Box';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#8FDDE7',
    },
    secondary: {
      main: '#FFC2C7',
    },
  },
});

theme = responsiveFontSizes(theme)


function App() {

  const [time, setTime] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [timerSeconds, setTimerSeconds] = useState(0)


  const [play] = useSound(Water)
  const [audio, {stop}] = useSound(Voice)


  const runAudioTimer = () => {
    let timerLength = time * 60000
    const interval = setInterval(() => {
      audio()
    }, timerLength)
    return () => clearInterval(interval)
  }

  const runVisualTimer = () => {
    setTimerSeconds(time * 60)
    const interval = setInterval(() => {
      setTimerSeconds(timerSeconds => timerSeconds - 1)
    }, 1000)
    return () => clearInterval(interval)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    runVisualTimer()
    setSubmitted(true)
    runAudioTimer()
  }

  const resetTimer = () => {
    window.location.reload()
  }

  return (
    <div className='bg-img'>
        <ThemeProvider theme={theme}>
          <Box minHeight='100vh' display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
            {
              !submitted ?
              <Form time={time} setTime={setTime} submitHandler={submitHandler} />
              : submitted ?
              <Timer time={time} setTimerSeconds={setTimerSeconds} timerSeconds={timerSeconds} resetTimer={resetTimer} />
              : ''
            }
              <Facts />
          </Box>
        </ThemeProvider>
      </div>
  );
}

export default App;
