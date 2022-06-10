import React, { useState, useEffect } from 'react';
import But from './But';
import TopBar from './Organisms/TopBar';
import FilterSlab from './Organisms/FilterSlab';
import AmourBoard from './Organisms/AmourBoard';
import MessageSection from './Organisms/MessageSection';
import './styly.scss';

export default function App() {
  return (
    <div>
      <TopBar></TopBar>
      <FilterSlab></FilterSlab>
      <AmourBoard></AmourBoard>
      <MessageSection></MessageSection>
      <But></But>
    </div>
  );
}
