import styled from 'styled-components';

import media from '~style/media';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colours.splash_screen_background_colour};
  color: ${({ theme }) => theme.colours.splash_screen_colour};
  user-select: none;
`;

const Logo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > img {
    margin: .5rem .5rem .25rem .5rem;
  }

  & > h3 {
    margin: .25rem .5rem .5rem .5rem;
    text-transform: uppercase;
  }
`;

const Status = styled.h2`
  min-width: 10rem;
  max-width: 100%;
  text-align: center;
  margin: .5rem;

  ${media.small`
    max-width: 30rem;
  `}

  ${media.medium`
    max-width: 45rem;
  `}

  ${media.large`
    max-width: 70rem;
  `}

  ${media.huge`
    max-width: 100%;
  `}
`;

export default {
  Wrapper,
  Logo,
  Status,
};
