import { NextSeo } from "next-seo";
import debounce from "debounce";
import {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  KeyboardEventHandler,
} from "react";
import { Stack } from "@/components/Stack";
import { SearchInput } from "@/components/SearchInput";
import { StationCardList } from "@/components/StationCardList";
import { useTranslation } from "@/lib/hooks/useTranslation";

export const Search = () => {
  const { t } = useTranslation();
  const input = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  const showList = query.length >= 3;
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
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
    <Stack spacing="sm">
      <NextSeo description="Search radios around the world" />
      <SearchInput
        ref={input}
        type="search"
        onKeyPress={closeKeyboard}
        onChange={debouncedOnChange}
        placeholder={t.search.placeholder}
      />

      {showList && <StationCardList where={{ name: { _ilike: `%${query}%` } }} />}
    </Stack>
  );
};

export default Search;
