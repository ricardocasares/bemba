import React, { FC, EventHandler, ChangeEvent } from "react";
import { SearchFilterParam } from "@/models/state";
import { Select } from "./Select";
import { Form, Input } from "./styles";

export type Search = {
  query: string;
  filter: SearchFilterParam;
  search: (query: string, filter: SearchFilterParam) => void;
};

export const Search: FC<Search> = ({ query, filter, search }) => {
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
      />
      <Select onChange={onSelect} defaultValue={filter}>
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
