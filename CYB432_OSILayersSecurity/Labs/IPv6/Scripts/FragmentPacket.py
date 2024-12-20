#! /usr/bin/env python

#Set log level for Scapy Warnings
import logging
logging.getLogger("scapy").setLevel(1)

from scapy.all import *

a = IPv6ExtHdrFragment(nh=44, offset=100, m=1)
b = IPv6(dst='2001::a6b8', src='8008::b8b8')
payload = "far.run" * 50
y = ICMPv6EchoRequest (data=payload)

packet = b/a/y

packet.show2()

send(packet)

