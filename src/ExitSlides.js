import * as React from "react";

import {
  Heading,
  UnorderedList,
  ListItem,
  Slide,
  Notes,
  Text,
} from "spectacle";

export function WrappingUp() {
  return (
    <Slide>
      <Heading>Wrapping Up</Heading>
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
