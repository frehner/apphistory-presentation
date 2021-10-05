import * as React from "react";

import {
  Heading,
  UnorderedList,
  ListItem,
  Slide,
  Notes,
  Text,
} from "spectacle";

export function ImANobody() {
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
          important to my mom and my kids. I'm more bringing this up so that you
          maybe feel a spark of inspiration
        </p>
        <p>
          The whole reason I'm giving this talk was because I began to be
          slightly passionate about fixing history's issues, and then around
          that same time I was directed to this newly created proposal. I don't
          understand web spec stuff, I'm just some dev that said "hey this
          sucks, how can I maybe make it better?"
        </p>
      </Notes>
    </Slide>
  );
}

export function WrappingUp() {
  return (
    <Slide>
      <Heading>Wraping Up</Heading>
      <Notes>
        <p>
          There's still quite a bit to talk about App History, and to discover.
          More than I can give in this presentation AND not have you fall
          asleep.
        </p>
      </Notes>
    </Slide>
  );
}

export function GetInvolved() {
  return (
    <Slide>
      <Heading>Get Involved</Heading>
      <Text>
        If there's a topic or technology that interests you, you can get
        involved even if you never make a "contribution" (to code)
      </Text>
      <UnorderedList>
        <ListItem>Look it up, read it, understand it</ListItem>
        <ListItem>Polietely ask questions or make suggestions</ListItem>
        <ListItem>
          Reach out to someone (me if you want!) to help guide you
        </ListItem>
      </UnorderedList>
      <Notes>
        <p></p>
      </Notes>
    </Slide>
  );
}
