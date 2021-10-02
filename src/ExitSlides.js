import * as React from "react";

import { Heading, UnorderedList, ListItem, Slide, Notes } from "spectacle";

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

export function GetInvolved() {
  return (
    <Slide>
      <Heading>Have Opinions?</Heading>
    </Slide>
  );
}
