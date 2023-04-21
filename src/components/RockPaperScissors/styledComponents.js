import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`
export const ScoreAndHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: transparent;
  border: 1px solid #ffffff;
  width: 90%;
  height: 30%;
`
export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 400;
`
export const ScoreContainer = styled.div`
  background-color: #ffffff;
  color: #223a5f;
  width: 20%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`
export const Paragraph = styled.p`
  color: #223a5f;
  font-size: 20px;
  font-family: 'Roboto';
`
export const ChoiceListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const ChoiceImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`
export const Image = styled.img`
  height: 100px;
  width: 100px;
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const RulesButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  padding: 10px;
  border: none;
`
export const PopUpImage = styled.img`
  width: 80%;
`
export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  padding: 10px;
  border: none;
  width: 150px;
  margin-bottom: 40px;
`
