import React from 'react';
import ReactDom from 'react-dom';
import Login from '../Login';

it("No crash reported", () => {
    const root = document.createElement("div");
    ReactDom.render(<Login></Login>, root);


    expect(root.querySelector("h4").textContent).toBe("Login");

})
