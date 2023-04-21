import {Component} from 'react'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import ChoiceListItem from '../ChoiceListItem'

import {
  AppContainer,
  ScoreAndHeadingContainer,
  HeadingContainer,
  Heading,
  ScoreContainer,
  Paragraph,
  ChoiceListContainer,
  ChoiceImagesContainer,
  Image,
  ResultContainer,
  RulesButton,
  PopUpImage,
  PlayAgainButton,
} from './styledComponents'

class RockPaperScissors extends Component {
  state = {
    isPlaying: true,
    score: 0,
    yourChoiceImage: '',
    opponentChoiceImage: '',
    gameResult: '',
  }

  yourChoice = choiceDetails => {
    const {choicesList} = this.props
    const num = Math.floor(Math.random() * choicesList.length)
    const opponentImage = choicesList[num].imageUrl

    if (choiceDetails.imageUrl === opponentImage) {
      this.setState({gameResult: 'IT IS DRAW'})
    } else if (
      (choiceDetails.id === 'ROCK' && choicesList[num].id === 'PAPER') ||
      (choiceDetails.id === 'PAPER' && choicesList[num].id === 'SCISSORS') ||
      (choiceDetails.id === 'SCISSORS' && choicesList[num].id === 'ROCK')
    ) {
      this.setState(prevState => ({
        score: prevState.score - 1,
        gameResult: 'YOU LOSE',
      }))
    } else if (
      (choiceDetails.id === 'ROCK' && choicesList[num].id === 'SCISSORS') ||
      (choiceDetails.id === 'SCISSORS' && choicesList[num].id === 'PAPER') ||
      (choiceDetails.id === 'PAPER' && choicesList[num].id === 'ROCK')
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        gameResult: 'YOU WON',
      }))
    }
    this.setState({
      yourChoiceImage: choiceDetails.imageUrl,
      opponentChoiceImage: choicesList[num].imageUrl,
      isPlaying: false,
    })
  }

  renderPopUp = () => (
    <Popup
      trigger={<RulesButton type="button">Rules</RulesButton>}
      position="right center"
    >
      <PopUpImage
        src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
        alt="rules"
      />
    </Popup>
  )

  renderPlayingView = () => {
    const {choicesList} = this.props

    return (
      <ChoiceListContainer>
        {choicesList.map(eachChoice => (
          <ChoiceListItem
            yourChoice={this.yourChoice}
            key={eachChoice.id}
            choiceDetails={eachChoice}
          />
        ))}
      </ChoiceListContainer>
    )
  }

  renderResultsView = () => {
    const {yourChoiceImage, opponentChoiceImage} = this.state
    return (
      <ResultContainer>
        <ChoiceImagesContainer>
          <Image src={yourChoiceImage} alt="your choice" />
          <Image src={opponentChoiceImage} alt="opponent choice" />
        </ChoiceImagesContainer>
      </ResultContainer>
    )
  }

  onClickPlayAgain = () => {
    this.setState({isPlaying: true})
  }

  render() {
    const {isPlaying, score, gameResult} = this.state
    return (
      <AppContainer>
        <ScoreAndHeadingContainer>
          <HeadingContainer>
            <Heading>Rock Paper Scissors</Heading>
          </HeadingContainer>
          <ScoreContainer>
            <Paragraph>Score</Paragraph>
            <Paragraph>{score}</Paragraph>
          </ScoreContainer>
        </ScoreAndHeadingContainer>
        {isPlaying ? this.renderPlayingView() : this.renderResultsView()}
        <Paragraph>{gameResult}</Paragraph>
        <PlayAgainButton onClick={this.onClickPlayAgain}>
          Play Again
        </PlayAgainButton>
        <RulesButton onClick={this.renderPopUp} type="button">
          Rules
        </RulesButton>
      </AppContainer>
    )
  }
}

export default RockPaperScissors
