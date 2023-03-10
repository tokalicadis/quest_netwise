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

const ButtonGenerate1 = styled('div')({
  border: `1px solid rgba(113, 102, 249, 1)`,
  boxSizing: `border-box`,
  borderRadius: `55px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `10px 52px`,
  height: 'auto',
  width: 'fit-content',
});

const Generate = styled('div')(({ theme }) => ({
  textAlign: `center`,
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

function ButtonGenerate(props) {
  return (
    <ButtonGenerate1>
      <Generate>{`Generate`}</Generate>
    </ButtonGenerate1>
  );
}

export default ButtonGenerate;
