import * as React from "react";
import {
  FlexBox,
  Heading,
  UnorderedList,
  CodeSpan,
  ListItem,
  Appear,
  Slide,
  Text,
  Image,
  CodePane,
  Notes,
} from "spectacle";
import youGetNothing from "./media/you-get-nothing.gif";
import couldBeBetter from "./media/could-be-better.jpg";

export function HCallDirectly({ ComponentAs = Slide, styles = {} }) {
  return (
    <ComponentAs {...styles}>
      <Heading>Call Me Maybe</Heading>
      <CodePane language="javascript" showLineNumbers={false}>
        history.pushState()
      </CodePane>
    </ComponentAs>
  );
}

export function HProblemsOverview() {
  return (
    <Slide>
      <FlexBox flex="1 1 auto">
        <Image
          src={couldBeBetter}
          alt="History is good, but it could be better"
          style={{ objectFit: "cover" }}
          height="100%"
        />
      </FlexBox>
      <Notes>
        <p>
          I'm going to go over some of the problems with history, as it
          currently stands. I'm not going to spend a lot of time on each one,
          but instead just provide an overview of it for the sake of boredom and
          time.
        </p>
        <p>
          Afterwards, we'll look at how AppHistory hopes to solve these
          problems. So let's get started with:
        </p>
      </Notes>
    </Slide>
  );
}

export function HAnchorIssues({ ComponentAs = Slide, styles = {} }) {
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

export function HNoEvent() {
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

export function HNoEventSummary({ ComponentAs = Slide, styles = {} }) {
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

export function HShareIssues({ ComponentAs = Slide, styles = {} }) {
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

export function HStackHidden({ ComponentAs = Slide, styles = {} }) {
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
