import * as React from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Typography from '@mui/material/Typography'
import * as Challenges from "./challenges/index"

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
        © Otavio Pliger {new Date().getFullYear()}. All rights reserved
        </Typography>
    )
}

interface AppState {
    selectedChallenge:number
}

class App extends React.Component {
    state:AppState = {
        selectedChallenge: 0
    }

    challenges:string[] = []
    challenge = Object.values(Challenges)[this.state.selectedChallenge]
    options:JSX.Element[] = []

    constructor(props:any) {
        super(props)

        Object.keys(Challenges).map((key) => {
            this.challenges.push(key)
        })

        for (let index = 0; index < this.challenges.length; index++) {
            const element = this.challenges[index]
            this.options.push(<option key={index} value={index}>{element}</option>)
        }
    }

    handleChange(event: SelectChangeEvent<unknown>) {
        this.setState({
            selectedChallenge: Object.values({selectedValue: event.target.value})[0] as number
        })

        this.challenge = Object.values(Challenges)[Object.values({selectedValue: event.target.value})[0] as number]
    }

    render() {

        return (
            <Box sx={{ px: 6}}>
                <Box sx={{ my: 4, width: 240, marginLeft: 'auto', marginRight: 0 }}>
                    <FormControl fullWidth>
                        <InputLabel>Challenges</InputLabel>
                        <Select native label="Challenges" onChange={(event) => this.handleChange(event)}>
                            {this.options}
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ my: 4 }}>
                    <this.challenge />
                </Box>
                <Box sx={{ my: 4 }}>
                    <Copyright />
                </Box>
            </Box>
        )
    }
}

export default App
