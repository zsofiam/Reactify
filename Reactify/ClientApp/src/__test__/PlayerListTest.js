import React from "react";
import { cleanup, render } from '@testing-library/react';
import PlayList from "../components/playList/PlayList";

beforeAll(() =>
    Object.defineProperty(HTMLMediaElement.prototype, "muted", {
        set: jest.fn(),
    })
);

test('page has a player and playList element', () => {
    const { getByTestId } = render(<PlayList />);
    const playList = getByTestId('playlist');
    const player = getByTestId('player');
    expect(playList).toBeTruthy();
    expect(player).toBeTruthy();
});


test('page has a player and playList element', () => {
    const { getByTestId } = render(<PlayList />);
    const playList = getByTestId('playlist');
    const player = getByTestId('player');
    expect(playList).toBeTruthy();
    expect(player).toBeTruthy();
});


afterEach(cleanup);