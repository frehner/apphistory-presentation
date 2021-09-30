import * as React from "react";
import {
  HAnchorIssues,
  HShareIssues,
  HStackHidden,
  HNoEventSummary,
} from "./History";
import {
  FlexBox,
  Heading,
  Appear,
  Slide,
  Text,
  Box,
  CodePane,
  Stepper,
  Notes,
} from "spectacle";

import angelic from "./media/angelic.jpg";

const historyProblemStyles = {
  border: "2px solid black",
  style: { transform: "scale(.5)" },
  padding: 4,
};

function AppHistorySolutionToProblem({ firstStepContent, secondStepContent }) {
  return (
    <Stepper values={["apphistory"]} alwaysVisible>
      {(_, step) => {
        if (step === -1) return firstStepContent;
        if (step === 0) return secondStepContent;
      }}
    </Stepper>
  );
}

export function AHAnchorTag() {
  return (
    <Slide>
      <AppHistorySolutionToProblem
        firstStepContent={
          <>
            <Heading>Problem:</Heading>
            <HAnchorIssues ComponentAs={Box} styles={historyProblemStyles} />
          </>
        }
        secondStepContent={
          <>
            <Heading>Solution:</Heading>
            <CodePane language="html" showLineNumbers={false}>
              {`<a href="/other-url">Go to other url</a>`}
            </CodePane>
          </>
        }
      />
      <Notes>
        <p>
          Wait, you say: there's no javascript here! And that's exactly the
          point. You now have hte beautiful semantic HTML, no javascript, and it
          will still go through AppHistory. If someone has JS disabled? Still
          works - it just does a full page refresh. If someone has JS enabled,
          then they get the enhanced single-page experience.
        </p>
      </Notes>
    </Slide>
  );
}

export function AHEvent() {
  return (
    <Slide>
      <AppHistorySolutionToProblem
        firstStepContent={
          <>
            <Heading>Problems:</Heading>
            <HNoEventSummary ComponentAs={Box} styles={historyProblemStyles} />
            <HShareIssues ComponentAs={Box} styles={historyProblemStyles} />
          </>
        }
        secondStepContent={
          <>
            <Heading>Solution:</Heading>
            <CodePane language="javascript" showLineNumbers={false}>
              {`
                appHistory.addEventListener("navigate", (evt) => {
                  // a navigation has started
                })
              `}
            </CodePane>
          </>
        }
      />
    </Slide>
  );
}

export function AHStack() {
  return (
    <Slide>
      <AppHistorySolutionToProblem
        firstStepContent={
          <>
            <Heading>Problem:</Heading>
            <HStackHidden ComponentAs={Box} styles={historyProblemStyles} />
          </>
        }
        secondStepContent={
          <>
            <Heading>Solution:</Heading>
            <CodePane language="javascript" showLineNumbers={false}>
              {`
                appHistory.entries()
                // [Entry1, Entry2]
              `}
            </CodePane>
          </>
        }
      />
    </Slide>
  );
}

export function AHOverview() {
  return (
    <>
      <Slide>
        <Heading>Introducing...</Heading>
        <Notes>
          <p>Cue angelic music or something.</p>
        </Notes>
      </Slide>
      <Slide backgroundImage={`url(${angelic})`} backgroundOpacity={0.3}>
        <FlexBox alignItems="center" height="100%" flexDirection="column">
          <Heading>App History</Heading>
          <Appear>
            <Text>The foundation of web 3.0? 🤔</Text>
          </Appear>
        </FlexBox>
        <Notes>
          <p>
            I actually don't know what this Web 3.0 stuff is, and I don't
            actually think of App History as some sort of angel that will save
            us from history's sins or whatever.
          </p>
          <p>
            But the hope is that App History can fix some of those glaring
            issues while hopefully not introducing new ones. So, with the
            knowledge of some of the headaches that history has, let's see how
            app history hopefully cleans things up
          </p>
        </Notes>
      </Slide>
    </>
  );
}

export function AHLoadingStatus() {
  return (
    <Slide>
      <Heading>Loading...</Heading>
    </Slide>
  );
}
