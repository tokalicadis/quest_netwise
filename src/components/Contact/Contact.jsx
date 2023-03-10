/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import ProfilePicture11Image from 'src/assets/images/Contact_Profile_Picture__1__1.png';
import { styled } from '@mui/material/styles';

const Contact1 = styled('div')({
  border: `1px solid rgba(113, 102, 249, 1)`,
  boxSizing: `border-box`,
  borderRadius: `23px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `21px 36px`,
  height: 'auto',
  width: 'fit-content',
});

const Frame2 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `40px`,
  height: `40px`,
  margin: `0px`,
  overflow: `hidden`,
});

const ProfilePicture11 = styled('img')({
  height: `40px`,
  width: `40px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const ContactDetails = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 13px`,
});

const Example1 = styled('div')(({ theme }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  color: `rgba(113, 102, 249, 1)`,
  fontStyle: `normal`,
  fontFamily: `Quicksand`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
}));

const HiIHopeYouLike = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  color: `rgba(171, 171, 171, 1)`,
  fontStyle: `normal`,
  fontFamily: `Quicksand`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `6px 0px 0px 0px`,
});

function Contact(props) {
  return (
    <Contact1>
      <Frame2>
        <ProfilePicture11
          src={ProfilePicture11Image}
          loading="lazy"
          alt={'Profile Picture (1) 1'}
        />
      </Frame2>
      <ContactDetails>
        <Example1>{`Example 1`}</Example1>
        <HiIHopeYouLike>{`Hi, I hope you like...`}</HiIHopeYouLike>
      </ContactDetails>
    </Contact1>
  );
}

export default Contact;
