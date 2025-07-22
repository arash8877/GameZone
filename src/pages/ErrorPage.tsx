import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Heading>Oops!</Heading>
      <Text>
        {isRouteErrorResponse(error) ? "Page Not Found." : "An unexpected error occurred."}
      </Text>
    </>
  );
};

export default ErrorPage;
