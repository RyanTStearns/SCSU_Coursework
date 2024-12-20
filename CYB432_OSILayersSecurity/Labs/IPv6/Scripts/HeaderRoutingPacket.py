#! /usr/bin/env python

#Set log level for Scapy Warnings
import logging
logging.getLogger("scapy").setLevel(1)

from scapy.all import *

x = IPv6(dst='2001::a6b8', src='8008::b8b8')
payload = "far.run" * 50
y = ICMPv6EchoRequest (data=payload)
z = IPv6ExtHdrRouting(addresses=['2001::a6b8', '2001::c9ff'])
packet = x/z/y

packet.show2()

send(packet)
