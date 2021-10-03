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

export function GetInvolved() {
  return (
    <Slide>
      <Heading>Have Opinions?</Heading>
    </Slide>
  );
}
