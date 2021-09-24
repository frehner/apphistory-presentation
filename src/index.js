import React from "react";
import ReactDOM from "react-dom";

import {
  FlexBox,
  Heading,
  UnorderedList,
  CodeSpan,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Stepper,
  Slide,
  Deck,
  Text,
  Box,
  Image,
  CodePane,
  Notes,
} from "spectacle";

import youGetNothing from "./media/you-get-nothing.gif";
import couldBeBetter from "./media/could-be-better.jpg";
import angelic from "./media/angelic.jpg";

const formidableLogo =
  "https://avatars2.githubusercontent.com/u/5078602?s=280&v=4";

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
      <NeilsTalk />
      <SelfInfo />
      <TopicOverview />
      <ImANobody />
      <HProblemsOverview />
      <HCallDirectly />
      <HAnchorIssues />
      <HNoEvent />
      <HShareIssues />
      <HStackHidden />
      <AHOverview />
      <AHCalls />
      <AHAnchorTag />
      <AHEvent />
      <AHStack />
    </Deck>
  );
}

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

function AHCalls() {
  return (
    <Slide>
      <AppHistorySolutionToProblem
        firstStepContent={
          <>
            <Heading>Problem:</Heading>
            <HCallDirectly ComponentAs={Box} styles={historyProblemStyles} />
          </>
        }
        secondStepContent={
          <>
            <Heading>Solution:</Heading>
          </>
        }
      />
    </Slide>
  );
}

function AHAnchorTag() {
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

function AHEvent() {
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

function AHStack() {
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

function TopicOverview() {
  return (
    <Slide>
      <Heading>Why are we here?</Heading>
      <Text>
        We're going to talk about History in browsers, and the AppHistory
        proposal
      </Text>
    </Slide>
  );
}

function NeilsTalk() {
  return (
    <Slide>
      <Heading>A Better Talk</Heading>
      <Text>Neil's talk is going on, you probably want to be in that one</Text>
    </Slide>
  );
}

function SelfInfo() {
  return (
    <Slide>
      <Heading>Intro</Heading>Name, Twitter, Background, etc
    </Slide>
  );
}

function HCallDirectly({ ComponentAs = Slide, styles = {} }) {
  return (
    <ComponentAs {...styles}>
      <Heading>Call Me Maybe</Heading>
      <CodePane language="javascript" showLineNumbers={false}>
        history.pushState()
      </CodePane>
    </ComponentAs>
  );
}

function ImANobody() {
  return (
    <Slide>
      <Heading>I'm a nobody</Heading>
      <UnorderedList>
        <ListItem>
          Not affiliated with any big company or group that works on this full
          time
        </ListItem>
        <ListItem>Go out and participate (respectfully, nicely)</ListItem>
      </UnorderedList>
      <Notes>
        <p>
          I'm not actually that self deprecating; I know that I'm somebody
          important to my mom and my kids
        </p>
        <p>
          I'm more bringing this up so that you maybe feel a spark of
          inspiration
        </p>
      </Notes>
    </Slide>
  );
}

function HProblemsOverview() {
  return (
    <Slide>
      <Heading>History</Heading>
      <Image
        src={couldBeBetter}
        alt="History is good, but it could be better"
      />
    </Slide>
  );
}

function HAnchorIssues({ ComponentAs = Slide, styles = {} }) {
  return (
    <ComponentAs {...styles}>
      <Text>
        You can use History with anchor tags... but you have to prevent default
        and then call history.pushState / history.updateState
      </Text>
      <Notes>
        <p>
          e.g. React Router code here
          https://github.com/remix-run/react-router/blob/main/packages/react-router-dom/modules/Link.js
        </p>
      </Notes>
    </ComponentAs>
  );
}

function HNoEvent() {
  return (
    <>
      <Slide>
        <Heading>Trivia Time!</Heading>
        <UnorderedList>
          <Appear>
            <ListItem>
              When you click a button, you get{" "}
              <CodeSpan>
                <Appear tagName="span">click</Appear>
              </CodeSpan>{" "}
              event
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              When you change the URL hash, you get{" "}
              <CodeSpan>
                <Appear tagName="span">hashchange</Appear>
              </CodeSpan>{" "}
              event
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              When you submit a form, you get{" "}
              <CodeSpan>
                <Appear tagName="span">submit</Appear>
              </CodeSpan>{" "}
              event
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              When the drawing buffer associated with a WebGLRenderingContext
              object has been lost, you get{" "}
              <CodeSpan>
                <Appear tagName="span">webglcontextlost</Appear>
              </CodeSpan>{" "}
              event
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              If a friend commits to hanging out with you this weekend, but then
              later cancels the plans, you get a{" "}
              <CodeSpan>
                <Appear tagName="span">promise rejection</Appear>
              </CodeSpan>{" "}
              event
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              When you call <CodeSpan>history.pushState()</CodeSpan>...
            </ListItem>
          </Appear>
        </UnorderedList>
        <Notes>
          <p>
            I'm going to ask you a question, and you tell me what event you get
            from it:
          </p>
        </Notes>
      </Slide>
      <Slide>
        <Image src={youGetNothing} />
      </Slide>
      <HNoEventSummary />
    </>
  );
}

function HNoEventSummary({ ComponentAs = Slide, styles = {} }) {
  return (
    <ComponentAs {...styles}>
      <Heading>Nothing!</Heading>
      <Text>Wait, really?</Text>
      <Notes>
        <p>
          Isn't it wild that this very important event dealing with routing...
          doesn't have an event you can listen for? So this is why you see
          things like the smart people at React Training making a History
          library, with one of the goals being that they can now observe when
          calls are made to history.pushState()
        </p>
      </Notes>
    </ComponentAs>
  );
}

function HShareIssues({ ComponentAs = Slide, styles = {} }) {
  return (
    <ComponentAs {...styles}>
      <Heading>Sharing Issues</Heading>
      <Notes>
        <p>
          An unfortunate sideeffect of people building their own History
          management is that there's no standard way of sharing that info. E.g.
          3rd party library, widget, or custom element. One of the "easiest"
          ways of solving this is to directly monkeypatch history.pushState()
        </p>
      </Notes>
    </ComponentAs>
  );
}

function HStackHidden({ ComponentAs = Slide, styles = {} }) {
  return (
    <ComponentAs {...styles}>
      <Heading>History Needs Its Own Space</Heading>
      <Notes>
        <p>
          Due to security reasons, you can't see what's in the history stack; no
          looking at what the URL was 3 navigations ago (unless you keep track
          yourself)
        </p>
      </Notes>
    </ComponentAs>
  );
}

function AHOverview() {
  console.log(angelic);
  return (
    <Slide backgroundImage={angelic} backgroundOpacity={0.5}>
      <Heading>Introducing...</Heading>
      <Text>App History</Text>
    </Slide>
  );
}

ReactDOM.render(<MyPresentation />, document.getElementById("root"));
