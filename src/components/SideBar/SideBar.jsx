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
import MaskGroupImage from 'src/assets/images/SideBar_Mask_group.png';
import Diversity3Image from 'src/assets/images/SideBar_diversity_3.png';
import Campaign1Image from 'src/assets/images/SideBar_campaign.png';
import DraftsImage from 'src/assets/images/SideBar_drafts.png';
import ViewInArNewImage from 'src/assets/images/SideBar_view_in_ar_new.png';
import Settings1Image from 'src/assets/images/SideBar_settings.png';
import { styled } from '@mui/material/styles';
import DashboardIcoImage from 'src/assets/images/SideBar_Dashboard_ico.png';
import LeadsIcoImage from 'src/assets/images/SideBar_Leads_ico.png';

const Property1Default = styled('div')(({ theme }) => ({
  backgroundColor: `rgba(246, 246, 251, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  height: `1080px`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `63px 0px 329px 0px`,
  boxSizing: `border-box`,
  width: '100%',
}));

const Frame135 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const MaskGroup = styled('img')({
  height: `54px`,
  width: `52px`,
  margin: `0px`,
});

const NetWise = styled('div')({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Quicksand`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px 0px 0px 15px`,
});

const Menu = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px 22px`,
  boxSizing: `border-box`,
  height: `436px`,
  width: `276px`,
});

const Dashboard = styled('div')({
  background: `linear-gradient(-90deg, rgba(113, 102, 249, 0.03) 0.000026370834051817313%, rgba(113, 102, 249, 0) 100.00002637083382%)`,
  borderRadius: `4px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `16px 16px 16px 58px`,
  boxSizing: `border-box`,
  height: `40px`,
  width: `272px`,
  margin: `0px`,
});

const DashboardIco = styled('div')({
  backgroundImage: `url(${DashboardIcoImage})`,
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  width: `18px`,
  height: `18px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Dashboard1 = styled('div')(({ theme }) => ({
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
  margin: `0px 0px 0px 17px`,
}));

const Rectangle20 = styled('div')(({ theme }) => ({
  backgroundColor: `rgba(113, 102, 249, 1)`,
  borderRadius: `4px 0px 0px 4px`,
  width: `4px`,
  height: `41px`,
  position: `absolute`,
  left: `268px`,
  top: `-1px`,
}));

const Leads = styled('div')({
  borderRadius: `4px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `16px 17px 16px 58px`,
  boxSizing: `border-box`,
  height: `42px`,
  width: `272px`,
  margin: `0px`,
});

const LeadsIco = styled('div')({
  backgroundImage: `url(${LeadsIcoImage})`,
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  width: `18px`,
  height: `18px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Leads1 = styled('div')(({ theme }) => ({
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
  margin: `0px 0px 0px 17px`,
}));

const Rectangle201 = styled('div')({
  backgroundColor: `rgba(246, 246, 251, 1)`,
  borderRadius: `4px 0px 0px 4px`,
  width: `4px`,
  height: `41px`,
  position: `absolute`,
  left: `268px`,
  top: `-1px`,
});

const Socials = styled('div')({
  borderRadius: `4px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `16px 17px 16px 58px`,
  boxSizing: `border-box`,
  height: `41px`,
  width: `272px`,
  margin: `0px`,
});

const Diversity3 = styled('img')({
  height: `18px`,
  width: `18px`,
  margin: `0px`,
});

const Socials1 = styled('div')(({ theme }) => ({
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
  margin: `0px 0px 0px 17px`,
}));

const Rectangle202 = styled('div')({
  backgroundColor: `rgba(246, 246, 251, 1)`,
  borderRadius: `4px 0px 0px 4px`,
  width: `4px`,
  height: `41px`,
  position: `absolute`,
  left: `268px`,
  top: `-1px`,
});

const Campaign = styled('div')({
  borderRadius: `4px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `16px 17px 16px 58px`,
  boxSizing: `border-box`,
  height: `41px`,
  width: `272px`,
  margin: `0px`,
});

const Campaign1 = styled('img')({
  height: `18px`,
  width: `18px`,
  margin: `0px`,
});

const Campaigns = styled('div')(({ theme }) => ({
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
  margin: `0px 0px 0px 17px`,
}));

const Rectangle203 = styled('div')({
  backgroundColor: `rgba(246, 246, 251, 1)`,
  borderRadius: `4px 0px 0px 4px`,
  width: `4px`,
  height: `41px`,
  position: `absolute`,
  left: `268px`,
  top: `-1px`,
});

const EMail = styled('div')({
  borderRadius: `4px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `16px 17px 16px 58px`,
  boxSizing: `border-box`,
  height: `40px`,
  width: `272px`,
  margin: `0px`,
});

const Drafts = styled('img')({
  height: `18px`,
  width: `18px`,
  margin: `0px`,
});

const EMail1 = styled('div')({
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
  margin: `0px 0px 0px 17px`,
});

const Rectangle204 = styled('div')({
  backgroundColor: `rgba(246, 246, 251, 1)`,
  borderRadius: `4px 0px 0px 4px`,
  width: `4px`,
  height: `41px`,
  margin: `0px 0px 0px 17px`,
});

const AiCreator = styled('div')({
  borderRadius: `4px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `16px 17px 16px 58px`,
  boxSizing: `border-box`,
  height: `40px`,
  width: `272px`,
  margin: `0px`,
});

const ViewInArNew = styled('img')({
  height: `18px`,
  width: `18px`,
  margin: `0px`,
});

const AiCreator1 = styled('div')(({ theme }) => ({
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
  margin: `0px 0px 0px 17px`,
}));

const Rectangle205 = styled('div')({
  backgroundColor: `rgba(246, 246, 251, 1)`,
  borderRadius: `4px 0px 0px 4px`,
  width: `4px`,
  height: `41px`,
  position: `absolute`,
  left: `268px`,
  top: `-1px`,
});

const Settings = styled('div')({
  borderRadius: `4px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `16px 17px 16px 58px`,
  boxSizing: `border-box`,
  height: `40px`,
  width: `272px`,
  margin: `0px`,
});

const Settings1 = styled('img')({
  height: `18px`,
  width: `18px`,
  margin: `0px`,
});

const Settings2 = styled('div')(({ theme }) => ({
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
  margin: `0px 0px 0px 17px`,
}));

const Rectangle206 = styled('div')({
  backgroundColor: `rgba(246, 246, 251, 1)`,
  borderRadius: `4px 0px 0px 4px`,
  width: `4px`,
  height: `41px`,
  position: `absolute`,
  left: `268px`,
  top: `-1px`,
});

function SideBar(props) {
  return (
    <Property1Default>
      <Frame135>
        <MaskGroup src={MaskGroupImage} loading="lazy" alt={'Mask group'} />
        <NetWise>{`NetWise`}</NetWise>
      </Frame135>
      <Menu>
        <Dashboard>
          <DashboardIco></DashboardIco>
          <Dashboard1>{`Dashboard`}</Dashboard1>
          <Rectangle20></Rectangle20>
        </Dashboard>
        <Leads>
          <LeadsIco></LeadsIco>
          <Leads1>{`Leads`}</Leads1>
          <Rectangle201></Rectangle201>
        </Leads>
        <Socials>
          <Diversity3
            src={Diversity3Image}
            loading="lazy"
            alt={'diversity_3'}
          />
          <Socials1>{`Socials`}</Socials1>
          <Rectangle202></Rectangle202>
        </Socials>
        <Campaign>
          <Campaign1 src={Campaign1Image} loading="lazy" alt={'campaign'} />
          <Campaigns>{`Campaigns`}</Campaigns>
          <Rectangle203></Rectangle203>
        </Campaign>
        <EMail>
          <Drafts src={DraftsImage} loading="lazy" alt={'drafts'} />
          <EMail1>{`E-Mail`}</EMail1>
          <Rectangle204></Rectangle204>
        </EMail>
        <AiCreator>
          <ViewInArNew
            src={ViewInArNewImage}
            loading="lazy"
            alt={'view_in_ar_new'}
          />
          <AiCreator1>{`AI Creator`}</AiCreator1>
          <Rectangle205></Rectangle205>
        </AiCreator>
        <Settings>
          <Settings1 src={Settings1Image} loading="lazy" alt={'settings'} />
          <Settings2>{`Settings`}</Settings2>
          <Rectangle206></Rectangle206>
        </Settings>
      </Menu>
    </Property1Default>
  );
}

export default SideBar;
