import React from "react";
import {cleanup, render} from '@testing-library/react';
import MusicPlayer from "../components/musicPlayer/MusicPlayer";
import "@testing-library/jest-dom/extend-expect";

beforeAll(() =>
    Object.defineProperty(HTMLMediaElement.prototype, "muted", {
        set: jest.fn(),
    })
);

test('home page icons and bg reders without crashing', () => {
    const {getByTestId} = render(<MusicPlayer/>);
    const background = getByTestId('music-player');

    expect(background).toBeTruthy();
})


afterEach(cleanup);