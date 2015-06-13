ntp-client
==========
[Meteor package](https://atmospherejs.com/flowsoft/ntp-client) for [node-ntp-client](https://github.com/moonpyk/node-ntp-client)

Usage
=====

```
if(Meteor.isServer) {
  ntpClient.getNetworkTime("pool.ntp.org", 123, function(err, date) {
    if(err) {
        console.error(err);
        return;
    }

    console.log("Current time : ");
    console.log(date);
  });
}
```
