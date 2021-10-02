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
  style: { transform: "scale(.5) translateY(-25%)" },
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
      <Notes>
        <p>
          Before the solution is shown: Remeber the problem we had earlier with
          anchor tags and history? Well, what kind of crazy solution do you
          think exists for that in app history?
        </p>
        <p>
          Wait, you say: there's no javascript here! And that's exactly the
          point. You now have this beautiful, semantic HTML, no javascript, and
          it will still go through AppHistory.
        </p>
        <p>
          An important note here: what if someone has JS disabled? This still
          works - it just does a full page refresh, since it's just a normal
          anchor tag. And if you do have JS enabled, then they get the enhanced
          single-page experience. A win for the web, right?
        </p>
        <hr />
      </Notes>
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
    </Slide>
  );
}

export function AHEvent() {
  return (
    <Slide>
      <Notes>
        <p>
          (If you squint a little bit, does it look like that baby on the far
          right has a goatee?) Looking back at our sharing issues, it really
          comes down to the fact that devs were forced to create libraries for
          something that maybe should have just been part of the platform from
          the beginning.
        </p>
        <p>
          For example, we can resolve the issue of sharing things like
          navigation events by just having a standard DOM event that anyone can
          listen to and react to, as shown on line 1.
        </p>
        <p>
          In addition, let's look at what's happening on line 3: anyone can add
          their own promise or promises to that navigation event. This means
          anyone can come in and say "hey, I need data for this specific url",
          and you don't have to worry about it. 3rd party widgets or custom
          elements can now just do their own thing and still participate in
          routing events, making them become way more sharable and reusable
          across sites. This API has been built with sharing in mind!
        </p>
        <hr />
      </Notes>
      <AppHistorySolutionToProblem
        firstStepContent={
          <>
            <Heading>Problem:</Heading>
            <HShareIssues ComponentAs={Box} styles={historyProblemStyles} />
          </>
        }
        secondStepContent={
          <>
            <Heading>Solution:</Heading>
            <CodePane language="javascript">
              {`
                appHistory.addEventListener("navigate", (evt) => {
                  // you can also add your own promise(s) to the navigation
                  evt.transitionWhile(
                    fetch(url).then(response => response.json())
                  )
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
      <Notes>
        <p>
          We talked about how there were several issues with the history stack -
          how you couldn't see it for various reasons, how state could go
          missing, and how other things like iframes could add unwanted entries
          into your site's navigation stack.
        </p>
        <p>
          App History's history (or entry) stack locks down the things that need
          to be, and allows the things you need as well: - no iframe entries, no
          missing state, and you can get the whole list at any time.
        </p>
        <p>
          Also, it's not something I'm going to dig into in this talk, but each
          entry has information in it, such as IDs, keys, urls, and a getState()
          method.
        </p>
        <hr />
      </Notes>
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
            <CodePane language="javascript">
              {`
                appHistory.entries()
                // [Entry1, Entry2]
                // there's lots of info on each entry here
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

export function AHAccessibility() {
  return (
    <Slide>
      <Heading>Accessibility</Heading>
    </Slide>
  );
}

export function AHEventSignal() {
  return (
    <Slide>
      <Heading>Event Signal</Heading>
    </Slide>
  );
}

export function AHBonusFeatures() {
  return (
    <Slide>
      <Heading>Bonus Features!</Heading>
      <Notes>
        <p>
          So, we've talked about some of the glaring problems of History, and
          how App History aims to solve them. But why stop there?
        </p>
        <p>
          Let me introduce you to some of the other cool things that a
          newly-designed history API for the web can do:
        </p>
      </Notes>
    </Slide>
  );
}
