import {useState} from 'react'
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';
import { bgcolor } from '@mui/system';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const waterFacts = {
    items: [
        {
            title: 'Drinking water flushes toxins from your body.',
            description: "This fact about water comes directly from the kidneys. If your kidneys don't have the proper amount of water to help process metabolic waste, they operate inefficiently. Do your body a favor and hydrate yourself so you can flush out toxins naturally. No 'juice cleanse' required. "
        },
        {
            title: 'Drinking water helps you lose weight',
            description:"This common saying is in fact true. Although water itself is not a weight loss drug, it can be a positive influence on your diet as well as your metabolism. Those who stay vigilant about hydration enjoy a boosted metabolism, and a tall glass of water before a meal can help reduce overindulgence. "
        },
        {
            title:'Dehydration can impair cognitive function ',
            description: "This fact has the potential to change lives for many people. Studies show that if your hydration levels are even 3% off of where they should be, you can experience noticeable impairment. Short term memory, visual perception, and motor ability all became significantly impaired in those who were dehydrated. So next time you notice yourself having a bout of brain fog, reach for a glass of water and keep your hydration in mind."
        }, 
        {
            title: 'Most Americans are chronically dehydrated',
            description:"This fact is unfortunately true. Three out of every four Americans are chronically dehydrated. To some, this may not seem like a huge deal, but as we've seen in the previous facts, water has a large influence on our health, both physical and mental. If you think you might be a part of the 75%, take this opportunity to grab glass of water. If you suspect a friend of family needs one too, spread the word."
        },
        {
            title: 'Dehydration is one of the most common risk factors for kidney stones',
            description: "Rounding out our list of facts is a cautionary tale of the possible implications of chronic dehydration. Being chronically dehydrated is, according to a 1990 study, a factor in roughly 20% of kidney stone cases. [iii] In another study, kidney stone patients who were told to consume more water in their course of treatment resulted in drop in kidney stone reoccurrence. "
        }, 
        {
            title: 'The older you are, the more vigilant you must be about hydration',
            description: "As you age, your sensation of thirst becomes less and less noticeable. This makes staying hydrated much more difficult as you can miss out on one of the bodies most important reminders. To combat this, get in the habit of drinking a glass of water in the morning when you wake up, a glass with every meal, and a glass before bed. The best way to beat the effects of dehydration is to stay ahead of them!"
        },
        {
            title: 'Water intake doesn’t have to be from water',
            description: "While plain old water is certainly healthy and beneficial, you can get hydrated from a number of water-dense foods, including watermelon, cucumbers, beets, carrots, and celery."
        },
        {
            title: 'Working out doesn’t mean you need a sports drink',
            description: "While it’s true you normally see people reach for the Gatorade during halftime at a soccer game, it’s not always necessary. Experts say if you’re working out moderately for an hour or less, plain water is sufficient for hydration. It would take more than an hour of fairly vigorous exercise to start to deplete your electrolytes"
        },
        {
            title: "It lubricates the joints",
            description: "Cartilage, found in joints and the disks of the spine, contains around 80 percent water. Long-term dehydration can reduce the joints’ shock-absorbing ability, leading to joint pain."
        },
        {
            title: 'It delivers oxygen throughout the body',
            description: "Blood is more than 90 percent water, and blood carries oxygen to different parts of the body."
        },
        {
            title: 'It boosts skin health and beauty',
            description: "With dehydration, the skin can become more vulnerable to skin disorders and premature wrinkling."
        },
        {
            title: 'It cushions the brain, spinal cord, and other sensitive tissues',
            description: "Dehydration can affect brain structure and function. It is also involved in the production of hormones and neurotransmitters. Prolonged dehydration can lead to problems with thinking and reasoning."
        },
        {
            title:'It regulates body temperature',
            description: "Water that is stored in the middle layers of the skin comes to the skin’s surface as sweat when the body heats up. As it evaporates, it cools the body. In sport. Some scientists have suggested thatTrusted Source when there is too little water in the body, heat storage increases and the individual is less able to tolerate heat strain. Having a lot of water in the body may reduce physical strain if heat stress occurs during exercise. However, more research is needed into these effects."
        },
        {
            title:'The digestive system depends on it',
            description: "The bowel needs water to work properly. Dehydration can lead to digestive problems, constipation, and an overly acidic stomach. This increases the risk of heartburn and stomach ulcers."
        }
    ]
}


const Facts = () => {

    // const [count, setCount] = useState(0)
    const theme = useTheme();

    const [activeStep, setActiveStep] = useState(0)
    
    const maxSteps = waterFacts.items.length

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div>
            <Box maxWidth={ {xs:375, sm:400, md:600, lg:850}}>
                <Paper sx={{opacity:'90%'}}>
                <Paper square elevation={0} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 1,
                    bgcolor: 'primary.main',
                    color:'white'
                }}>
                    <Typography>{waterFacts.items[activeStep].title}</Typography>
                </Paper>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {waterFacts.items.map((step, index) => (
                        <div key={step.title}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box
                                    sx={{
                                        minHeight: 100,
                                        maxWidth: 800,
                                        overflow: 'hidden',
                                        width: '100%',
                                        px:2,
                                        my:2
                                    }}
                                    
                                >
                                    <Typography>{waterFacts.items[activeStep].description}</Typography>
                                </Box>
                                ) : null}
                        </div>
                    ))}
                </SwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    sx={{bgcolor:'transparent'}}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                            color='secondary'
                        >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0} color='secondary'>
                            {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                            Back
                        </Button>
                        }
                />
                </Paper>
            </Box>
        </div>
    )
}

export default Facts
