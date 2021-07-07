import React from 'react';
import * as rtl from "@testing-library/react";
import PlayerCard from './components/PlayerCard';
import App from './App'
import renderer from 'react-test-renderer';
import {toHaveClass} from '@testing-library/jest-dom'
expect.extend({ toHaveClass})

test('Testing Test', () => {
  expect(true).toBeTruthy()
})


//Test 1
test('Test for Labels', () => {
  const { getByText } = rtl.render(<PlayerCard />);
  getByText(/name/i);
  getByText(/country/i);
});


//Test 2
test('Snapshot test', () => {
  const tree = renderer.create(<PlayerCard />).toJSON();
  expect(tree).toMatchSnapshot();
});



//Test 3
//Could not implement a third test due to lack of information in the sprint and lack of knowledge to test API and Toggle Methods. To many variables and things to add to make either of those tests work but I do have knowledge of them and think I can implement those types of tests as I learn more.
//Found 1
test("Test for ClassName", () => {
  const { getByTestId } = rtl.render(<App />);
  expect(getByTestId("header")).toHaveClass('App');
 
});
