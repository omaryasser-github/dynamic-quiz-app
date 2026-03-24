# Manual Testing Checklist

## Start Screen

- [✅] Start button starts the quiz
- [✅] Loading appears while fetching questions
- [✅] Error message appears if fetch fails

## Quiz Screen

- [✅] Question text renders correctly
- [✅] Exactly 4 answers are displayed
- [✅] Only one answer can be selected
- [✅] Rapid repeated clicks do not break the app
- [✅] Correct answer is highlighted
- [✅] Incorrect selected answer is highlighted
- [✅] Score updates correctly
- [✅] Progress bar updates correctly

## Result Screen

- [✅] Final score is correct
- [✅] Max score is correct
- [✅] Result message matches percentage
- [✅] Restart resets the full quiz

## Edge Cases

- [✅] API returns empty array
- [✅] API returns malformed data
- [✅] Network failure is handled
- [✅] Slow loading does not break UI
- [✅] Fast repeated user clicks do not cause duplicate actions
- [✅] Restart during loading is handled correctly
- [✅] Duplicate questions are handled
- [✅] Duplicate answers are handled
