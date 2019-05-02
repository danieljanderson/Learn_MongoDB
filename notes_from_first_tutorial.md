Promises
They are used to handle anything asynchronous

They when you make a promise ie function name = new Promise (resolve,reject)
you are creating a new promise object

When you create the promise your are passing in arguments for the resolve and reject functions

reject and resolve manipulate the state of the promise

promises have three states
'unresolved' = waiting for the code to run
'resolved' = code ran and was successful (ie when you hit a website and it shows you a webpage)
'rejected' = code that ran but something went wrong (ie when you get a 400 error on a websire)

we as the devolopers determine what resoved and rejected are.

StartGame().then() will the evaluate to the resolved value you determined in the promises
StartGame().catch() will evaluate to the value you rejected determined in the promises
