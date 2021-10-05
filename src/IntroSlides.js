import * as React from "react";

import {
  Heading,
  UnorderedList,
  ListItem,
  Slide,
  Text,
  Link,
  Stepper,
  Notes,
  CodeSpan,
} from "spectacle";

export function TopicOverview() {
  return (
    <Slide>
      <Heading>Why are we here?</Heading>
      <Text>
        <Stepper alwaysVisible values={["one"]}>
          {(_, step) => {
            if (step === -1) {
              return (
                <UnorderedList>
                  <ListItem>Get out of work for the day</ListItem>
                  <ListItem>Get lunch</ListItem>
                  <ListItem>
                    See another person for the first time in ~2 years
                  </ListItem>
                </UnorderedList>
              );
            }
            return (
              <UnorderedList>
                <ListItem>Learn history's shortcomings</ListItem>
                <ListItem>Introduction to AppHistory</ListItem>
              </UnorderedList>
            );
          }}
        </Stepper>
      </Text>
      <Notes>
        <p>
          Whoops, don't show that list to your boss. If your boss is here, tell
          them that next week's sprint tasks were accidentally deleted, that
          should buy you time to do what you need to do.
        </p>
      </Notes>
    </Slide>
  );
}

export function NeilsTalk() {
  return (
    <Slide>
      <Heading>A Better Talk</Heading>
      <Text>Neil's talk is going on, you probably want to be in that one</Text>
      <Notes>
        <p>
          Hi everyone, before I get started I want to make sure you all know
          where you are. You may be here by mistake - an old coworer of mine,
          Neil, is also giving a talk right now and his talk will probably be
          much more interesting than this one. Here, we're going to talk about
          some crummy JS APIs. So yeah
        </p>
      </Notes>
    </Slide>
  );
}

export function SelfInfo() {
  return (
    <Slide>
      <Heading>About Me</Heading>
      <UnorderedList>
        <ListItem>Anthony Frehner (fray-ner)</ListItem>
        <ListItem>
          <Link
            href="//twitter.com/frehner_a"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter: @frehner_a
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="//github.com/frehner"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub: frehner
          </Link>
        </ListItem>
        <ListItem>
          Original proposor of <CodeSpan>*vh</CodeSpan> CSS units (lvh, dvh,
          svh)
        </ListItem>
      </UnorderedList>
      <Notes></Notes>
    </Slide>
  );
}
