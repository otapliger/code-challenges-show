import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript'
import a11y from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-light'
SyntaxHighlighter.registerLanguage('typescript', ts)

const codeSnippet = `
getOutput(array:number[]) {
    let minSum = 0
    let maxSum = 0

    for (let index = 0; index < array.length; index++) {
        const element = array[index]

        if (index != array.indexOf(Math.max.apply(null, array)))
            minSum += element

        if (index != array.indexOf(Math.min.apply(null, array)))
            maxSum += element
    }

    return ([minSum, maxSum].join(" "))
}
`

interface MiniMaxSumState {
    output:string,
    input:string
}

class MiniMaxSum extends React.Component {
    state:MiniMaxSumState = {
        output: "",
        input: ""
    }

    challengeName = "MiniMaxSum"
    challengeUrl = "https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/problem"

    checkInput(array:number[]) {
        for (let index = 0; index < array.length; index++) {
            const element = array[index]
            if (array.length != 5
            || !Number.isInteger(element)
            || Number.isNaN(element)
            || element < 1) {
                return(false)
            }
        }

        return(true)
    }

    getOutput(array:number[]) {
        let minSum = 0
        let maxSum = 0

        for (let index = 0; index < array.length; index++) {
            const element = array[index]

            if (index != array.indexOf(Math.max.apply(null, array)))
                minSum += element

            if (index != array.indexOf(Math.min.apply(null, array)))
                maxSum += element
        }

        return ([minSum, maxSum].join(" "))
    }

    handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({input: event.currentTarget.value})
    }

    handleSubmit = () => {
        let array = this.state.input.split(' ').map(Number)

        if (this.checkInput(array))
            this.setState({output: this.getOutput(array)})
        else
            this.setState({output: "input error"})
    }

    render() {

        return (
            <Box>
                <Typography variant="h4" component="h1" gutterBottom>
                {this.challengeName}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <Link color="inherit" href={this.challengeUrl}>
                    {this.challengeUrl}
                    </Link>
                </Typography>
                <Box sx={{ my: 4 }}>
                    <Typography variant="h6" gutterBottom>
                    Input Format
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    A single line of five space-separated integers.
                    </Typography>
                    <TextField sx={{width: 320}} id="integers" variant="outlined" size="small" onChange={this.handleInput} />
                    <Box sx={{ my: 1 }}>
                        <Button variant="contained" onClick={() => this.handleSubmit()}>SUBMIT</Button>
                    </Box>
                </Box>
                <Box sx={{ width: 640 }}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Output
                            </Typography>
                            <Typography variant="h5" component="div">
                            <pre>{this.state.output}</pre>
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box sx={{ my: 4 }}>
                    <SyntaxHighlighter language="javascript" style={a11y}>
                    {codeSnippet}
                    </SyntaxHighlighter>
                </Box>
            </Box>
        )
    }
}

export default MiniMaxSum
