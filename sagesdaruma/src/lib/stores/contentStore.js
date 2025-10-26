import { writable } from 'svelte/store';

export const currentState = writable('initial');

export const currentHeadlines = writable(["~/home/sagebox/ > are you still here?"]);

export const conversationFlow = {
    initial: {
        text: ["~/home/sagebox/ > are you still here?"],
        buttons: [
            { label: "yes", nextState: "yes_response" },
            { label: "no", nextState: "no_response" }
        ]
    },
    yes_response: {
        text: ["Great! What would you like to see?"],
        buttons: [
            { label: "Projects", nextState: "projects" },
            { label: "About", nextState: "about" }
        ]
    },
    no_response: {
        text: ["Hmm, but you clicked something...", "Let me show you around anyway"],
        buttons: [
            { label: "Okay fine", nextState: "projects" },
            { label: "Show me more", nextState: "about" }
        ]
    },
    projects: {
        text: ["~/projects/ > ls", "Here are my projects..."],
        buttons: [
            { label: "Back", nextState: "initial" }
        ]
    },
    about: {
        text: ["~/about/ > cat bio.txt", "About me..."],
        buttons: [
            { label: "Back", nextState: "initial" }
        ]
    }
};

export function changeState(newState) {
    currentState.set(newState);
    currentHeadlines.set(conversationFlow[newState].text);
}
