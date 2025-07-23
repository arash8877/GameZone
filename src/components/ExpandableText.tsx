import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface iProps {
  children: string;
}

const ExpandableText = ({ children }: iProps) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  const limit = 300;
  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + " ...";

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        marginLeft={1}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
