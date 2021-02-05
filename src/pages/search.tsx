import { NextSeo } from "next-seo";
import debounce from "debounce";
import {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  KeyboardEventHandler,
} from "react";
import { Box } from "@/components/Box";
import { SearchInput } from "@/components/SearchInput";
import { StationCardList } from "@/components/StationCardList";
import { useTranslation } from "@/lib/hooks/useTranslation";

export const Search = () => {
  const { t } = useTranslation();
  const input = useRef<HTMLInputElement>(null);
  const [Q, setQ] = useState("");

  const showList = Q.length >= 3;
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setQ(e.target.value);
  const debouncedOnChange = debounce(onChange, 350);
  const closeKeyboard: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      input.current.blur();
    }
  };

  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <Box p={["var(--sz3)"]}>
      <NextSeo description="Search radios around the world" />
      <SearchInput
        ref={input}
        type="search"
        onKeyPress={closeKeyboard}
        onChange={debouncedOnChange}
        placeholder={t.search.placeholder}
      />

      {showList && <StationCardList name={Q} limit={20} />}
    </Box>
  );
};

export default Search;
