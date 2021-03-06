import * as React from "react";
import ReactDOM from "react-dom";

import { FlexBox, FullScreen, Progress, Deck, Box } from "spectacle";
import {
  HProblemsOverview,
  HAnchorIssues,
  HNoEvent,
  HShareIssues,
  HStackHidden,
} from "./History";
import {
  AHOverview,
  AHAnchorTag,
  AHEvent,
  AHStack,
  AHLoadingStatus,
  AHBonusFeatures,
  AHEventSignal,
} from "./AppHistory";
import { SelfInfo, TopicOverview, AppHistoryRepo } from "./IntroSlides";
import { GetInvolved, WrappingUp } from "./ExitSlides";

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

function MyPresentation() {
  return (
    <Deck theme={theme} template={template}>
      <SelfInfo />
      <TopicOverview />
      <AppHistoryRepo />
      <HProblemsOverview />
      <HAnchorIssues />
      <HNoEvent />
      <HShareIssues />
      <HStackHidden />
      <AHOverview />
      <AHAnchorTag />
      <AHEvent />
      <AHStack />
      <AHBonusFeatures />
      <AHLoadingStatus />
      <AHEventSignal />
      <WrappingUp />
      <GetInvolved />
      <SelfInfo />
    </Deck>
  );
}

ReactDOM.render(<MyPresentation />, document.getElementById("root"));
