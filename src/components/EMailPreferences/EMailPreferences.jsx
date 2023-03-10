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
import { styled } from '@mui/material/styles';
import ButtonLanguage from 'src/components/ButtonLanguage/ButtonLanguage';
import ButtonTone from 'src/components/ButtonTone/ButtonTone';
import EMailTagline from 'src/components/EMailTagline/EMailTagline';

const EMailPreferences1 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(113, 102, 249, 1)`,
  boxSizing: `border-box`,
  borderRadius: `32px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  height: `188px`,
  width: '100%',
  justifyContent: `center`,
  alignItems: `center`,
  padding: `13px 0px`,
});

const Frame84 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px 14px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const SelectLanguage = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(113, 102, 249, 1)`,
  fontStyle: `normal`,
  fontFamily: `Montserrat`,
  fontWeight: `700`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
}));

const SelectTone = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(113, 102, 249, 1)`,
  fontStyle: `normal`,
  fontFamily: `Montserrat`,
  fontWeight: `700`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px 0px 0px 30px`,
}));

const Frame841 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `18px 0px 0px 0px`,
});

const ButtonLanguage1 = styled(ButtonLanguage)(({ theme }) => ({
  margin: `0px`,
}));

const ButtonTone1 = styled(ButtonTone)(({ theme }) => ({
  margin: `0px 0px 0px 48px`,
}));

const ChooseUserCase = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(113, 102, 249, 1)`,
  fontStyle: `normal`,
  fontFamily: `Montserrat`,
  fontWeight: `700`,
  fontSize: `12px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `18px 0px 0px 0px`,
}));

const EMailTagline1 = styled(EMailTagline)(({ theme }) => ({
  margin: `18px 0px 0px 0px`,
}));

function EMailPreferences(props) {
  return (
    <EMailPreferences1>
      <Frame84>
        <SelectLanguage>{`Select Language`}</SelectLanguage>
        <SelectTone>{`Select Tone`}</SelectTone>
      </Frame84>
      <Frame841>
        <ButtonLanguage1 />
        <ButtonTone1 />
      </Frame841>
      <ChooseUserCase>{`Choose user case`}</ChooseUserCase>
      <EMailTagline1 />
    </EMailPreferences1>
  );
}

export default EMailPreferences;
