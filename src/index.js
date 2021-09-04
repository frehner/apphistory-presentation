import React from "react";
import ReactDOM from "react-dom";

import {
  FlexBox,
  Heading,
  SpectacleLogo,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Stepper,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes,
} from "spectacle";

import youGetNothing from "./media/you-get-nothing.gif";

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

const SlideFragments = () => (
  <>
    <Slide>
      <Text>This is a slide fragment.</Text>
    </Slide>
    <Slide>
      <Text>This is also a slide fragment.</Text>
      <Appear>
        <Text>This item shows up!</Text>
      </Appear>
      <Appear>
        <Text>This item also shows up!</Text>
      </Appear>
    </Slide>
  </>
);

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide>
      <FlexBox height="100%">
        <SpectacleLogo size={500} />
      </FlexBox>
      <Notes>
        Spectacle supports notes per slide.
        <ol>
          <li>Notes can now be HTML markup!</li>
          <li>Lists can make it easier to make points.</li>
        </ol>
      </Notes>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="150px">
          ✨<i>Spectacle</i> ✨
        </Heading>
        <Heading margin="0px" fontSize="h2">
          A ReactJS Presentation Library
        </Heading>
        <Heading margin="0px 32px" color="primary" fontSize="h3">
          Where you can write your decks in JSX, Markdown, or MDX!
        </Heading>
      </FlexBox>
    </Slide>
    <Slide
      transition={{
        from: {
          transform: "scale(0.5) rotate(45deg)",
          opacity: 0,
        },
        enter: {
          transform: "scale(1) rotate(0)",
          opacity: 1,
        },
        leave: {
          transform: "scale(0.2) rotate(315deg)",
          opacity: 0,
        },
      }}
      backgroundColor="tertiary"
      backgroundImage="url(https://github.com/FormidableLabs/dogs/blob/main/src/beau.jpg?raw=true)"
      backgroundOpacity={0.5}
    >
      <Heading>Custom Backgrounds</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>backgroundColor</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundImage</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundOpacity</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundSize</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundPosition</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundRepeat</CodeSpan>
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Animated Elements</Heading>
      <OrderedList>
        <Appear>
          <ListItem>Elements can animate in!</ListItem>
        </Appear>
        <Appear>
          <ListItem>Out of order</ListItem>
        </Appear>
        <Appear priority={0}>
          <ListItem>
            Just identify the order with the prop <CodeSpan>priority</CodeSpan>!
          </ListItem>
        </Appear>
      </OrderedList>
    </Slide>
    <Slide>
      <FlexBox>
        <Text>These</Text>
        <Text>Text</Text>
        <Text color="secondary">Items</Text>
        <Text fontWeight="bold">Flex</Text>
      </FlexBox>
      <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
        <Box backgroundColor="primary">
          <Text color="secondary">Single-size Grid Item</Text>
        </Box>
        <Box backgroundColor="secondary">
          <Text>Double-size Grid Item</Text>
        </Box>
      </Grid>
      <Grid
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="1fr 1fr 1fr"
        alignItems="center"
        justifyContent="center"
        gridRowGap={1}
      >
        {Array(9)
          .fill("")
          .map((_, index) => (
            <FlexBox paddingTop={0} key={`formidable-logo-${index}`} flex={1}>
              <Image src={formidableLogo} width={100} />
            </FlexBox>
          ))}
      </Grid>
    </Slide>
    <SlideFragments />
    <Slide>
      <CodePane language="jsx">{`
        import { createClient, Provider } from 'urql';

        const client = createClient({ url: 'https://0ufyz.sse.codesandbox.io' });

        const App = () => (
          <Provider value={client}>
            <Todos />
          </Provider>
        );
        `}</CodePane>
      <Box height={20} />
      <CodePane language="java" showLineNumbers={false}>{`
        public class NoLineNumbers {
          public static void main(String[] args) {
            System.out.println("Hello");
          }
        }
        `}</CodePane>
    </Slide>
    <div>
      <Slide>
        <Heading>This is a slide embedded in a div</Heading>
      </Slide>
    </div>
    <MarkdownSlide componentProps={{ color: "yellow" }}>
      {`
        # This is a Markdown Slide

        - You can pass props down to all elements on the slide.
        - Just use the \`componentProps\` prop.
        `}
    </MarkdownSlide>
    <MarkdownSlide animateListItems>
      {`
       # This is also a Markdown Slide

       It uses the \`animateListItems\` prop.

       - Its list items...
       - ...will appear...
       - ...one at a time.
      `}
    </MarkdownSlide>
    <Slide>
      <Grid
        flex={1}
        gridTemplateColumns="50% 50%"
        gridTemplateRows="50% 50%"
        height="100%"
      >
        <FlexBox alignItems="center" justifyContent="center">
          <Heading>This is a 4x4 Grid</Heading>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Text textAlign="center">
            With all the content aligned and justified center.
          </Text>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Text textAlign="center">
            It uses Spectacle <CodeSpan>{"<Grid />"}</CodeSpan> and{" "}
            <CodeSpan>{"<FlexBox />"}</CodeSpan> components.
          </Text>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Box width={200} height={200} backgroundColor="secondary" />
        </FlexBox>
      </Grid>
    </Slide>
    <MarkdownSlideSet>
      {`
        # This is the first slide of a Markdown Slide Set
        ---
        # This is the second slide of a Markdown Slide Set
        `}
    </MarkdownSlideSet>
  </Deck>
);

function MyPresentation() {
  return (
    <Deck theme={theme} template={template}>
      <NeilsTalk />
      <SelfInfo />
      <TopicOverview />
      <ImANobody />
      <HistoryProblemsOverview />
      <HistoryCallDirectly />
      <HistoryAnchorIssues />
      <HistoryHasNoEvent />
      <HistoryShareIssues />
      <HistoryStackHidden />
    </Deck>
  );
}

function TopicOverview() {
  return (
    <Slide>
      We're going to talk about History in browsers, and the AppHistory proposal
    </Slide>
  );
}

function NeilsTalk() {
  return (
    <Slide>Neil's talk is going on, you probably want to be in that one</Slide>
  );
}

function SelfInfo() {
  return <Slide>Name, Twitter, Background, etc</Slide>;
}

function HistoryCallDirectly() {
  return (
    <Slide>
      <CodePane language="javascript" showLineNumbers={false}>
        history.pushState()
      </CodePane>
    </Slide>
  );
}

function ImANobody() {
  return (
    <Slide>
      <UnorderedList>
        <ListItem>I'm (essentially) a nobody</ListItem>
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

function HistoryProblemsOverview() {
  return <Slide>History is good, but it can be better</Slide>;
}

function HistoryAnchorIssues() {
  return (
    <Slide>
      You can use History with anchor tags... but you have to prevent default
      and then call history.pushState / history.updateState
      <Notes>
        <p>
          e.g. React Router code here
          https://github.com/remix-run/react-router/blob/main/packages/react-router-dom/modules/Link.js
        </p>
      </Notes>
    </Slide>
  );
}

function HistoryHasNoEvent() {
  return (
    <>
      <Slide>
        <UnorderedList>
          <ListItem>
            When you click a button, you get <CodeSpan>click</CodeSpan> event
          </ListItem>
          <ListItem>
            When you change the URL hash, you get{" "}
            <CodeSpan>hashchange</CodeSpan> event
          </ListItem>
          <ListItem>
            When you submit a form, you get <CodeSpan>submit</CodeSpan> event
          </ListItem>
          <ListItem>
            When the drawing buffer associated with a WebGLRenderingContext
            object has been lost, you get <CodeSpan>webglcontextlost</CodeSpan>{" "}
            event
          </ListItem>
          <ListItem>
            If a friend commits to hanging out with you this weekend, but then
            later cancels the plans, you get a{" "}
            <CodeSpan>promise rejection</CodeSpan> event
          </ListItem>
          <ListItem>
            When you call <CodeSpan>history.pushState()</CodeSpan>...
          </ListItem>
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
        <Notes>
          <p>
            Isn't it wild that this very important event dealing with routing...
            doesn't have an event you can listen for? So this is why you see
            things like the smart people at React Training making a History
            library, with one of the goals being that they can now observe when
            calls are made to history.pushState()
          </p>
        </Notes>
      </Slide>
    </>
  );
}

function HistoryShareIssues() {
  return (
    <Slide>
      An unfortunate sideeffect of people building their own History management
      is that there's no standard way of sharing that info. E.g. 3rd party
      library, widget, or custom element. One of the "easiest" ways of solving
      this is to directly monkeypatch history.pushState()
    </Slide>
  );
}

function HistoryStackHidden() {
  return (
    <Slide>
      Due to security reasons, you can't see what's in the history stack; no
      looking at what the URL was 3 navigations ago (unless you keep track
      yourself)
    </Slide>
  );
}

ReactDOM.render(<MyPresentation />, document.getElementById("root"));
