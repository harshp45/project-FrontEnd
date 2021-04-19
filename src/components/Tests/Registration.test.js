import React from 'react';
import ReactDom from 'react-dom';
import Registration from '../Registration';

it("No crash reported", () => {
    const root = document.createElement("div");
    ReactDom.render(<Registration></Registration>, root);

    expect(root.querySelector("h4").textContent).toBe("Registration");
    expect(root.querySelector("button").textContent).toBe("Register");
})
