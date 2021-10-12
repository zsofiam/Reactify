import React from "react";
import {cleanup, render} from '@testing-library/react';
import Home from "../components/Home";


beforeAll(() =>
    Object.defineProperty(HTMLMediaElement.prototype, "muted", {
        set: jest.fn(),
    })
);

test('home page icons and bg reders without crashing', () => {
    const {getByTestId} = render(<Home/>);
    const background = getByTestId('background-video');

    expect(background).toBeTruthy();
})


test('home page icons and bg reders without crashing', () => {
    const {getByTestId} = render(<Home/>);
    const background = getByTestId('play-music-button');
    expect(background).toBeTruthy();
})

afterEach(cleanup);