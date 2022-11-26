import { writable } from 'svelte/store';

export const track = writable(-1);
export const playing = writable(-1); // -1 = not started, 0 = paused, 1 = playing
export const showPlaylist = writable(false);
