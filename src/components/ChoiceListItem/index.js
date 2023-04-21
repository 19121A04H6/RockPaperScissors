import {ListItem, ChoiceButton, Image} from './styledComponents'

const ChoiceListItem = props => {
  const {choiceDetails, yourChoice} = props
  const {imageUrl, id} = choiceDetails

  const onClickImage = () => {
    yourChoice(choiceDetails)
  }

  switch (id) {
    case 'ROCK':
      return (
        <ListItem>
          <ChoiceButton onClick={onClickImage} data-testid="rockButton">
            <Image src={imageUrl} alt={id} />
          </ChoiceButton>
        </ListItem>
      )

    case 'PAPER':
      return (
        <ListItem>
          <ChoiceButton onClick={onClickImage} data-testid="paperButton">
            <Image src={imageUrl} alt={id} />
          </ChoiceButton>
        </ListItem>
      )

    default:
      return (
        <ListItem>
          <ChoiceButton onClick={onClickImage} data-testid="scissorsButton">
            <Image src={imageUrl} alt={id} />
          </ChoiceButton>
        </ListItem>
      )
  }
}
export default ChoiceListItem
