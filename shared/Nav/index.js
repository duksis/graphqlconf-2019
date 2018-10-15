import React from 'react'
import Link from 'next/link'

import LogoSvg from '../vectors/Logo'
import {
  GraphQL,
  LogoText,
  LogoIcon,
  Logo,
  NavLink,
  NavButtonStyle,
  FlexWrapper
} from './style'
import { Container } from '../Container'

export const Nav = () => {
  return (
    <Container>
      <FlexWrapper>
        <Logo href="/">
          <LogoIcon>
            <LogoSvg />
          </LogoIcon>
          <LogoText>
            <GraphQL>GraphQL</GraphQL> Conf
          </LogoText>
        </Logo>

        <NavLink hideOnMobile={true} href="http://slack.com">
          Community
        </NavLink>

        <NavLink href="#speakers">Speakers</NavLink>

        <NavLink hideOnMobile={true} href="#schedule">
          Schedule
        </NavLink>

        <Link href="/team" passHref>
          <NavLink hideOnMobile={true}>Team</NavLink>
        </Link>

        <NavButtonStyle href="http://google.com">Submit Talk</NavButtonStyle>
      </FlexWrapper>
    </Container>
  )
}
