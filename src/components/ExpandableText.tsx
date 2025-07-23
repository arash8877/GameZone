import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface iProps {
  children: string;
}

const ExpandableText = ({ children }: iProps) => {
  const [expanded, setExpanded] = useState(false);

  const limit = 300;
  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = children.substring(0, limit);

  return (
    <Text>
      {summary}... <Button>{expanded ? "Show Less" : "Show More"}</Button>
    </Text>
  );
};

export default ExpandableText;
