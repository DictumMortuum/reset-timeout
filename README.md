# reset-timeout

Wanted to trigger a change once the user has stopped typing, because the operation was heavy to be triggered on every keystroke.

```
import { timeout } from 'reset-timeout';

document.onkeypress = timeout(
  () => dispatch(insert(d))
);
```

You can pass the delay in ms as the second argument of the timeout function. If not provided, its default value is 1000.
