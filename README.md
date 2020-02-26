```
sls offline start
```

```
wscat -c 'ws://127.0.0.1:3001'
send {"action": "default"} and the response will be {"message":"hi"}
```

change the "hi" on the code to "hi 1" and send again the {"action": "default"} and you will not see the updated code {"action": "default"}
