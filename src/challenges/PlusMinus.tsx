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
getOutput(n:number, array:number[]) {
    let positives = 0
    let negatives = 0
    let zeros = 0

    for (let index = 0; index < array.length; index++) {
        const element = array[index]

        if (element > 0)
            positives += 1
        else if (element < 0)
            negatives += 1
        else
            zeros += 1
    }

    return ([
        (positives / n).toFixed(6),
        (negatives / n).toFixed(6),
        (zeros / n).toFixed(6)
    ].join("\\n"))
}
`

interface PlusMinusState {
    output:string,
    input:string
}

class PlusMinus extends React.Component {
    state:PlusMinusState = {
        output: "",
        input: ""
    }

    challengeName = "PlusMinus"
    challengeUrl = "https://www.hackerrank.com/challenges/one-month-preparation-kit-plus-minus/problem"

    checkInput(n:number, array:number[]) {
        for (let index = 0; index < array.length; index++) {
            const element = array[index]
            if (array.length != n
            || !Number.isInteger(element)
            || Number.isNaN(element)) {
                return(false)
            }
        }

        return(true)
    }

    getOutput(n:number, array:number[]) {
        let positives = 0
        let negatives = 0
        let zeros = 0

        for (let index = 0; index < array.length; index++) {
            const element = array[index]

            if (element > 0)
                positives += 1
            else if (element < 0)
                negatives += 1
            else
                zeros += 1
        }

        return ([
            (positives / n).toFixed(6),
            (negatives / n).toFixed(6),
            (zeros / n).toFixed(6)
        ].join("\n"))
    }

    handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({input: event.currentTarget.value})
    }

    handleSubmit = () => {
        let lines = this.state.input.split("\n")

        if (lines.length != 2) {
            this.setState({output: "input error"})
        }
        else {
            let array = lines[1].split(" ").map(Number)

            if (this.checkInput(+lines[0], array)) {
                this.setState({output: this.getOutput(+lines[0], array)})
            }
            else {
                this.setState({output: "input error"})
            }
        }
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
                    The first line contains an integer, <b>n</b>, the size of the array.<br />
                    The second line contains space-separated integers that describe the <b>array[n]</b>.
                    </Typography>
                    <TextField multiline sx={{width: 320}} rows={2} id="integers" variant="outlined" size="small" onChange={this.handleInput} />
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

export default PlusMinus
