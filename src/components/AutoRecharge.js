import React from "react";
import { Box } from "@twilio-paste/core/box";
import { Input, Label, HelpText } from "@twilio-paste/core";
import { Stack } from "@twilio-paste/stack";

export default function AutoRecharge() {
  return (
    <Stack orientation="vertical" spacing="space40">
      <Box paddingTop="space20">
        <Label htmlFor="foo">When balance goes below, </Label>
        <Input
          aria-describedby="foo_text"
          id="foo"
          name="foo"
          type="text"
          value=""
          onChange={() => console.log(123)}
        />
        <HelpText id="foo_text">
          Minimum amount is $10.00 and Maximum amount is $1990.00
        </HelpText>
      </Box>
      <Box paddingTop="space20">
        <Label htmlFor="foo">Recharge the balance to</Label>
        <Input
          aria-describedby="foo_text"
          id="foo"
          name="foo"
          type="text"
          value=""
          onChange={() => console.log(123)}
        />
        <HelpText id="foo_text">
          Minimum amount is $20.00 and Maximum amount is $2000.00
        </HelpText>
      </Box>
    </Stack>
  );
}
