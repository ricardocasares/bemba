import { useState, useRef, useEffect, ChangeEvent } from "react";
import { Box } from "@/components/Box";
import { Heading } from "@/components/Typography";
import { SearchInput } from "@/components/SearchInput";
import { StationCardList } from "@/components/StationCardList";
import { useTranslation } from "@/lib/hooks/useTranslation";
import debounce from "debounce";

export const Index = () => {
  const { t } = useTranslation();
  const input = useRef<HTMLInputElement>(null);
  const [Q, setQ] = useState("");

  const showList = Q.length >= 3;
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setQ(e.target.value);
  const debouncedOnChange = debounce(onChange, 350);

  useEffect(() => input.current.focus(), []);

  return (
    <Box p={["var(--sz4)"]}>
      <Heading as="h3">{t.search.title}</Heading>

      <SearchInput
        type="text"
        ref={input}
        onChange={debouncedOnChange}
        placeholder={t.search.placeholder}
      />

      {showList && <StationCardList name={Q} limit={20} />}
    </Box>
  );
};

export default Index;
