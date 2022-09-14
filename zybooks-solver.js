// ==UserScript==
// @name         ZyBooks Solver
// @namespace    https://github.com/craftablescience/zybooks-solver
// @version      1.0.0
// @description  Does your homework for you!
// @author       craftablescience
// @match        *://learn.zybooks.com/zybook/*/chapter/*/section/*
// @icon         data:image/png;base64,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
// @updateURL    https://craftablescience.info/zybooks-solver/zybooks-solver.js
// @downloadURL  https://craftablescience.info/zybooks-solver/zybooks-solver.js
// @supportURL   https://github.com/craftablescience/zybooks-solver/issues
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const checkForProblems = setInterval(() => {
        const radios = document.querySelectorAll('.zb-radio-button input'); // multiple choice
        const checks = document.querySelectorAll('.zb-checkbox input'); // animations
        const starts = document.querySelectorAll('button.start-button'); // animations
        const showAnswers = document.querySelectorAll('button.show-answer-button'); // free response

        // Wait until the textbook is loaded in
        if (radios.length + checks.length + starts.length + showAnswers.length > 0) {
            clearInterval(checkForProblems);

            // Complete animations
            setTimeout(() => {
                // Enable 2x speed
                for (const check of checks) {
                    check.click();
                }

                // Need to keep pressing the Play button(s) until done
                const startsInterval = setInterval(() => {
                    for (const start of starts) {
                        start.click();
                    }

                    const plays = document.querySelectorAll('button[aria-label="Play"]');
                    const pauses = document.querySelectorAll('button[aria-label="Pause"]');
                    if (starts.length + plays.length + pauses.length === 0) {
                        clearInterval(startsInterval);
                    }
                    for (const play of plays) {
                        play.click();
                    }
                }, 1000);
            }, 500);

            // Complete multiple choice problems
            setTimeout(() => {
                const questions = document.getElementsByClassName('question-choices');

                // First pass, just check the first option
                for (const question of questions) {
                    const inputs = question.getElementsByTagName('input');
                    if (inputs.length > 0) {
                        inputs[0].click();
                    }
                }

                // Now fix all wrong answers
                // Wait a bit for the "Incorrect" elements to pop up
                // Additionally, option number starts at 1 because we already clicked the 0th option
                let optionNumber = 1;
                const incorrectQuestionCheck = setInterval(() => {
                    const incorrects = document.querySelectorAll('div.zb-explanation.incorrect');

                    if (incorrects.length === 0) {
                        // We're done here
                        clearInterval(incorrectQuestionCheck);
                    }

                    for (const incorrect of incorrects) {
                        const questions = incorrect.parentElement.getElementsByClassName('question-choices');
                        for (const question of questions) {
                            const inputs = question.getElementsByTagName('input');
                            if (inputs.length >= optionNumber + 1) {
                                inputs[optionNumber].click();
                            }
                        }
                    }
                    optionNumber++;
                }, 500);
            }, 500);

            // Complete free responses
            setTimeout(() => {
                // Show all answers
                for (const showAnswer of showAnswers) {
                    showAnswer.click();
                    showAnswer.click();
                }

                // Fill in responses
                setTimeout(() => {
                    const answers = document.querySelectorAll('div.has-explanation.forfeit');
                    for (const answer of answers) {
                        const answerText = answer.querySelector('.forfeit-answer').innerText;
                        const question = answer.parentElement.querySelector('textarea');
                        question.value = answerText;
                        // Necessary to get it to recognize the new value
                        question.dispatchEvent(new Event("change", {
                            bubbles: true
                        }));
                    }

                    // Click the submit button
                    setTimeout(() => {
                        const submits = document.querySelectorAll('button.check-button');
                        for (const submit of submits) {
                            submit.click();
                        }
                    }, 250);
                }, 250);
            }, 500);
        }
    }, 1000);
})();
