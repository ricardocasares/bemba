import React, { FC, EventHandler, ChangeEvent, useState } from 'react';
import { SearchFilterParam } from '@/models/state';
import { Form, Input, animate } from './styles';

export type Search = {
  query: string;
  filter: SearchFilterParam;
  search: (query: string, filter: SearchFilterParam) => void;
};

export const Search: FC<Search> = ({ query, filter, search }) => {
  const [expanded, setExpanded] = useState('blur');
  const onBlur = () => setExpanded('blur');
  const onFocus = () => setExpanded('focus');

  const onSubmit: EventHandler<ChangeEvent<HTMLFormElement>> = e => {
    e.preventDefault();
    search(query, filter);
  };

  const onInput: EventHandler<ChangeEvent<HTMLInputElement>> = e => {
    search(e.target.value, filter);
  };

  return (
    <Form onSubmit={onSubmit} animate={expanded} variants={animate}>
      <Input
        type="search"
        placeholder="Search"
        defaultValue={query}
        onChange={onInput}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </Form>
  );
};
