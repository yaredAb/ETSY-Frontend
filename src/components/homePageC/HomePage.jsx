import React from 'react'
import Filter from './Filter'
import Special from './Special';
import RecentUp from './RecentUp';
import Items from './Items';

const HomePage = () => {
  return (
    <main className="p-5">
      <Special />
      <Filter />
      <RecentUp />
      <Items />
    </main>
  );
}

export default HomePage
