import React, { Component } from 'react';
import styled, {css} from 'styled-components';

const animatedCss = css`
  opacity: 1;
  transform: translateY(0);
`
const primaryCss = css`
  background-color: #008bf8;
  color: #fff;
`
const StyledCard = styled.div`
  width: ${props => (props.big ? '450px' : '300px')};
  padding: 15px;
  opacity: 0;
  transform: translateY(50px);
  transition: 500ms all ease-in-out;
  margin: ${props => (props.noMargin ? 0 : '15px')};
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 1);
  border-radius: 5px;

  ${props => props.animated && animatedCss}
  ${props => props.primary && primaryCss}
`

class Card extends Component {
  state = {
    animated: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({animated: true})}, this.props.delay)
  }

  render() {
    const { delay = 0, noAnimation, primary, big, noMargin, ...props } = this.props;
    return (
      <StyledCard
        animated={this.state.animated}
        delay={delay}
        noAnimation={noAnimation}
        primary={primary}
        big={big}
        noMargin={noMargin}
        {...props}
       />

    )
  }
}

export default Card;