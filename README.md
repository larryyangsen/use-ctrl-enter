# use-ctrl-enter

A custom [React Hook](https://reactjs.org/docs/hooks-overview.html)  implement control+enter

## Usage

```JavaScript
import React from 'react';
import useCtrlEnter from 'use-ctrl-enter';
const { useEffect } = React;
const App = () => {
    const { ref, isCtrlEnter } = useCtrlEnter();
    useEffect(() => {
        if (isCtrlEnter) {
            alert(ref.current.value);
        }
    }, [isCtrlEnter]);
    return <textarea ref={ref} />;
};

```
