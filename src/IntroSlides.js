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
                  <ListItem>Get food</ListItem>
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
                <ListItem>Solicit feedback</ListItem>
              </UnorderedList>
            );
          }}
        </Stepper>
      </Text>
      <Notes>
        <p></p>
      </Notes>
    </Slide>
  );
}

export function AppHistoryRepo() {
  return (
    <Slide>
      <Heading>App History repo</Heading>
      <Text>
        <Link
          href="//github.com/wicg/app-history"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/wicg/app-history
        </Link>
      </Text>

      <Notes>
        <p>
          App history is a new proposal, and its main purpose is to fix some of
          the glaring issues with the current html5 history routing, as well as
          providing some cool new features on top of it. Here's a link to the
          repo, but be warned, there's a huge wall of text there! So I'm going
          to give you the TLDR version here, hopefully!
        </p>
        <p>
          To get started, though, let's talk about some of those issues that
          history has currently:
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
        <ListItem>single-spa maintainer</ListItem>
      </UnorderedList>
      <Notes>
        <p>
          There's some fun things about being the last speaker in the day: 1)
          You need to eat lunch very carefully, or else you'll have some fun
          stains during your talk, and 2) Due to the full day of anxiety, my
          watch's fitness tracker thinks I've been sprinting since 6:45am.
        </p>
        <p>
          I'm Anthony Frehner, the favorite child of my mother, favorite
          employee of my boss, and completely trustable in everything that I
          say.
        </p>
      </Notes>
    </Slide>
  );
}
