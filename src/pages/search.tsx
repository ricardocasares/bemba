import { useState, useRef, useEffect } from "react";
import { Box } from "@/components/Box";
import { Heading } from "@/components/Typography";
import { SearchInput } from "@/components/SearchInput";
import { StationCardList } from "@/components/StationCardList";

export const Index = () => {
  const input = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  const showList = query.length >= 3;
  const onChange = ({ target: { value } }) => setQuery(value);

  useEffect(() => input.current.focus(), []);

  return (
    <Box p={["var(--sz4)"]}>
      <Heading as="h3">Search</Heading>

      <SearchInput
        type="text"
        onChange={onChange}
        ref={input}
        placeholder="Type something ..."
      />

      {showList && <StationCardList name={query} limit={20} />}
    </Box>
  );
};

export default Index;
