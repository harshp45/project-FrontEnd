import React from 'react';
import ReactDom from 'react-dom';
import About from '../About';
import { queryByTestId, render } from "@testing-library/react";

it("No crash reported", () => {
    const div = document.createElement("div");
    ReactDom.render(<About></About>, div);
})
