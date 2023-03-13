const pcap = require('pcap');

const device = 'wlp0s20f3';

const session = pcap.createSession(device);

session.on('packet', (packet) => {
  // handle packet here
  console.log('Received packet:', packet);
});

