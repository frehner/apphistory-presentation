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
import babies1 from "./media/babies1.jpg";
import babies2 from "./media/babies2.png";

const imageProps = { style: { objectFit: "cover" }, height: "100%" };

export function HProblemsOverview() {
  return (
    <Slide>
      <FlexBox flex="1 1 auto">
        <Image
          src={couldBeBetter}
          alt="History is good, but it could be better"
          {...imageProps}
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
  const AppearAs = ComponentAs === Slide ? Appear : "div";
  return (
    <ComponentAs {...styles}>
      <Heading>Anchor Integration</Heading>
      <CodePane language="html">
        {`
          <a href="my-url"> Click! </a>
        `}
      </CodePane>
      <Text>How do we integrate this HTML with History?</Text>
      <AppearAs>
        <CodePane language="html">
          {`
            <a href="my-url"> Click! </a>

            <script>
              anchor.addEventListener('click', (evt) => {
                // other checks here too
                evt.preventDefault()
                history.pushState(state, title, url)
              })
            </script>
          `}
        </CodePane>
      </AppearAs>
      <Notes>
        <p>
          History has to be called manually, and doesn't integrate with HTML by
          default. For example, when working with an anchor tag, you don't have
          history routing even if you have a perfectly semantic and beautiful
          anchor tag.
        </p>
        <p>
          So in order to integrate history, you have your anchor tag... and then
          you have to prevent default (as seen on line 6), and call history
          directly (as seen on line 7). And after you use this for a bit, you'll
          also realize that you have to allow links to external URL through, or
          allow "control" clicks through, or what if you want a replace state
          instead of push state, or... etc., which is what's mentioned on line
          5.
        </p>
        <p>
          React Router code here for example
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
              When you click a button, you get a{" "}
              <CodeSpan>
                <Appear tagName="span">click</Appear>
              </CodeSpan>{" "}
              event
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              When you change the URL hash, you get a{" "}
              <CodeSpan>
                <Appear tagName="span">hashchange</Appear>
              </CodeSpan>{" "}
              event
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              When you submit a form, you get a{" "}
              <CodeSpan>
                <Appear tagName="span">submit</Appear>
              </CodeSpan>{" "}
              event
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading>Trivia Time Pt 2</Heading>
        <UnorderedList>
          <Appear>
            <ListItem>
              When the drawing buffer associated with a WebGLRenderingContext
              object has been lost, you get a{" "}
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
        <Image
          src={youGetNothing}
          alt="Willy Wonka shouting 'You get nothing! You lose! Good day sir!' emphatically"
          {...imageProps}
        />
      </Slide>
      <HNoEventSummary />
    </>
  );
}

export function HNoEventSummary({ ComponentAs = Slide, styles = {} }) {
  return (
    <ComponentAs {...styles}>
      <Heading>No History Events</Heading>
      <Text>This causes some problems...</Text>
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
  const AppearAs = ComponentAs === Slide ? Appear : "div";
  const appearProps =
    ComponentAs === Slide
      ? {
          activeStyle: { width: "49%", height: "100%", opacity: 1 },
          inactiveStyle: { width: "49%", height: "100%", opacity: 0 },
        }
      : { style: { width: "49%" } };
  return (
    <ComponentAs {...styles}>
      <Heading>Sharing Issues</Heading>
      <FlexBox justifyContent="space-between">
        <Image
          src={babies2}
          style={{ maxWidth: "49%" }}
          alt="Two babies. The one on the left is crying because it doesn't have a pacifier. The other is content because it does have a pacifier"
        />
        <AppearAs {...appearProps}>
          <Image
            src={babies1}
            style={{ maxWidth: "100%" }}
            alt="Two babies. The one on the right is crying because it doesn't have a pacifier. The other is content because it does have a pacifier"
          />
        </AppearAs>
      </FlexBox>
      <Notes>
        <p>
          Because there's no standard event for history, intelligent people have
          turned to creating their own history libraries so that they can keep
          track of what event was fired (e.g. pushState), what needs to be
          notified of that event, and what happens afterwards.
        </p>
        <p>
          An unfortunate sideeffect of building a custom library for history
          management is that there's no standard way of sharing that info. E.g.
          a 3rd party library, widget, or custom element. Either the history
          library has to code in a way for outside parties to call into it
          (which isn't fun for them), or (second slide step) 3rd parties have to
          figure out some hacks to get their stuff integrated with the library.
          No one is really happy in either case.
        </p>
      </Notes>
    </ComponentAs>
  );
}

export function HStackHidden({ ComponentAs = Slide, styles = {} }) {
  return (
    <ComponentAs {...styles}>
      <Heading>Hidden History history</Heading>
      <Text>In other words: the history stack is hidden</Text>
      <Notes>
        <p>
          For various reasons, you can't see what's in the history stack; no
          looking at what the URL was 3 navigations ago, what the state was, and
          in fact, there are some tricky things that you may not be aware of:
          for example, if an iframe navigates, then you have another entry in
          your history stack. If you navigate to a fragment (a.k.a. a hash
          navigation), then the state can be lost!
        </p>
        <p>
          This is yet another reason why smart people have created their own
          History libraries; they can keep track of the stack, the state, and
          can look through it all and find what they need.
        </p>
        <p>
          And again, this can cause issues with sharing that stack! (Go back a
          slide). We have even more sharing issues!
        </p>
      </Notes>
    </ComponentAs>
  );
}
