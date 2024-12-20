#! /usr/bin/env python

#Set log level for Scapy Warnings
import logging
logging.getLogger("scapy").setLevel(1)

from scapy.all import *

r = IPv6(dst='2001::a6b8', src='8008::b8b8')
payload = "far.run" * 50
s = ICMPv6EchoRequest (data=payload)
q = ("A" * 200)
t = IPv6ExtHdrHopByHop(options=PadN(optdata=q))

packet = r/t/s

packet.show2()

send(packet)

