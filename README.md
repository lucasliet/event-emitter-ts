# Message Emitter
Execute functions estimulated by events.

## installation
```SH
yarn add message-emitter
```

## usage

```TS
import * as Emitter from 'message-emitter';

Emitter.publish('test', 1, 2, 3 ,4 ); // pulish to topic 'test' the args 1, 2, 3, 4 

Emitter.subscribe('test', args => console.log(args)); // if the topic was published execute callback function to given arguments

Emitter.deleteTopic('test'); // remove topic

Emitter.hasTopic('test'); // returns true if topic exists, otherwise false
```

> ℹ for JavaScript <= es5 use require
```JS
var Emitter = require('message-emitter');
Emitter.publish('test', 1, 2, 3 ,4 );
```