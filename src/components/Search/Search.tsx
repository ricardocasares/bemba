import React, {
  FC,
  useState,
  EventHandler,
  ChangeEvent,
  FocusEvent
} from "react";
import { Form, Input } from "./styles";
import { Select } from "./Select";
import { SearchFilterParam } from "@/models/state";

export type Search = {
  query: string;
  filter: SearchFilterParam;
  search: (query: string, filter: SearchFilterParam) => void;
};

export const Search: FC<Search> = ({ query, filter, search }) => {
  const [hidden, setHidden] = useState(false);
  const onFocus: EventHandler<FocusEvent> = _ => {
    setHidden(true);
  };
  const onBlur: EventHandler<FocusEvent> = _ => {
    setHidden(false);
  };
  const onSubmit: EventHandler<ChangeEvent<HTMLFormElement>> = e => {
    e.preventDefault();
    search(query, filter);
  };

  const onInput: EventHandler<ChangeEvent<HTMLInputElement>> = e => {
    search(e.target.value, filter);
  };

  const onSelect: EventHandler<ChangeEvent<HTMLSelectElement>> = e => {
    search(query, e.target.value as SearchFilterParam);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="search"
        placeholder="Search"
        defaultValue={query}
        onChange={onInput}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <Select onChange={onSelect} defaultValue={filter} hidden={hidden}>
        <optgroup label="Filter by">
          {Object.values(SearchFilterParam).map(x => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}
        </optgroup>
      </Select>
    </Form>
  );
};
