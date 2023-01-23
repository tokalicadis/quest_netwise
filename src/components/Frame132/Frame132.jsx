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
import PersonPinImage from 'src/assets/images/Frame132_person_pin.png';
import VectorImage from 'src/assets/images/Frame132_Vector.png';
import ProfilePicture11Image from 'src/assets/images/Frame132_Profile_Picture__1__1.png';
import Rectangle21Image from 'src/assets/images/Frame132_Rectangle_21.png';
import Polygon1Image from 'src/assets/images/Frame132_Polygon_1.png';
import { styled } from '@mui/material/styles';

const Frame1321 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `80px`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `5px 11px`,
  boxSizing: `border-box`,
});

const Frame84 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Group30 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `52px`,
  height: `52px`,
  margin: `0px`,
});

const Rectangle22 = styled('div')({
  borderRadius: `4px`,
  width: `52px`,
  height: `52px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const PersonPin = styled('img')({
  height: `32px`,
  width: `32px`,
  position: `absolute`,
  left: `10px`,
  top: `10px`,
});

const Analytics = styled('div')(({ theme }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Quicksand`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px 0px 0px 23px`,
}));

const Vector = styled('img')({
  height: `16px`,
  width: `16px`,
  margin: `0px 0px 0px 23px`,
});

const Frame85 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const AdisTokalic = styled('div')(({ theme }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Quicksand`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
}));

const ProfilePicture11 = styled('img')({
  height: `40px`,
  width: `40px`,
  objectFit: `cover`,
  margin: `0px 0px 0px 16px`,
});

const Group28 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `16.8px`,
  height: `20.8px`,
  margin: `0px 0px 0px 16px`,
});

const Rectangle21 = styled('img')({
  height: `20.8px`,
  width: `16.8px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Polygon1 = styled('img')({
  height: `8.73px`,
  width: `7.44px`,
  position: `absolute`,
  left: `5px`,
  top: `5px`,
});

function Frame132(props) {
  return (
    <Frame1321>
      <Frame84>
        <Group30>
          <Rectangle22></Rectangle22>
          <PersonPin src={PersonPinImage} loading="lazy" alt={'person_pin'} />
        </Group30>
        <Analytics>{`Analytics`}</Analytics>
        <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
      </Frame84>
      <Frame85>
        <AdisTokalic>{`Adis Tokalic`}</AdisTokalic>
        <ProfilePicture11
          src={ProfilePicture11Image}
          loading="lazy"
          alt={'Profile Picture (1) 1'}
        />
        <Group28>
          <Rectangle21
            src={Rectangle21Image}
            loading="lazy"
            alt={'Rectangle 21'}
          />
          <Polygon1 src={Polygon1Image} loading="lazy" alt={'Polygon 1'} />
        </Group28>
      </Frame85>
    </Frame1321>
  );
}

export default Frame132;