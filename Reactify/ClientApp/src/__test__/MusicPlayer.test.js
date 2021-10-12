import React from "react";
import MusicPlayer from "../components/musicPlayer/MusicPlayer";
import {render, cleanup} from "@testing-library/react";

beforeAll(() =>
    Object.defineProperty(HTMLMediaElement.prototype, "muted", {
        set: jest.fn(),
    })
);

test('home page icons and bg reders without crashing', () => {
    const { getByTestId } = render(<MusicPlayer />);
    const background = getByTestId('music-player');

    expect(background).toBeTruthy();
})


afterEach(cleanup);