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
    </Slide>
  );
}

export function SelfInfo() {
  return (
    <Slide>
      <Heading>Intro</Heading>
      <Text>Anthony Frehner (fray-ner) </Text>
      <Text>
        <Link
          href="//twitter.com/frehner_a"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </Link>{" "}
        &{" "}
        <Link
          href="//github.com/frehner"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
      </Text>
      <Notes>
        <p>
          One possible way to remember my last name is to think of me as a
          frayed nerd.
        </p>
      </Notes>
    </Slide>
  );
}
