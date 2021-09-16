import React from "react";
import { render, cleanup } from '@testing-library/react';
import Home from "../components/Home";
import "@testing-library/jest-dom/extend-expect";

beforeAll(() =>
    Object.defineProperty(HTMLMediaElement.prototype, "muted", {
        set: jest.fn(),
    })
);

test('home page icons and bg reders without crashing', () => {
    const { getByTestId } = render(<Home />);
    const background = getByTestId('music-player');

    expect(background).toBeTruthy();
})


test('home page icons and bg reders without crashing', () => {
    const { getByTestId } = render(<Home />);
    const background = getByTestId('play-music-button');
    expect(background).toBeTruthy();
})

afterEach(cleanup);