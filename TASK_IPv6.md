# is_ipv6_packet

Implementieren Sie eine Funktion is_ipv6_packet(...), die als Parameter einen Pfad zu einer Datei erhält, in der ein IPv6-Paket gespeichert ist. Die Funktion soll true zurückgeben, wenn es sich um ein IPv6-Paket handelt. Ansonsten soll false zurückgegeben werden. Erzeugen Sie geeignete Testdaten, entweder synthetische Daten oder echte Daten, die Sie aus Wireshark exportieren.

Tipp: Finden Sie heraus, ab dem wie vielten Bit des Headers die Versionsnummer abgespeichert wird.

# shorten_ipv6_address

Schreiben Sie eine Funktion shorten_ipv6_address(...), die eine ausführlich ausgeschriebene IPv6-Adresse als Eingabe erhält und eine gekürzte Version zurückgibt. In RFC 4291 ist der IPv6-Standard ausführlich beschrieben, darunter auch die Textdarstellung von IPv6-Adressen in Abschnitt 2.2. Nutzen Sie https://www.linkwebbie.com/apps/ipv6-validator, um Ihre Implementierung zu testen.

Beispiel:
2001:aaaa:bbbb:cccc:0000:0000:0000:0010 kann abgekürzt werden als 
2001:aaaa:bbbb:cccc:   0:   0:   0:  10. Frage: Ist auch 
2001:aaaa:bbbb:cccc::::10 eine gültige Abkürzung? 
Wenn ja, wieso? Wenn nein, wieso nicht?

# is_loopback_address

Schreiben Sie eine Funktion is_loopback_address(...), die eine IPv6-Adresse als Eingabe erhält und true zurückgibt, wenn es sich um eine Loopback-Adresse handelt. Andernfalls wird false zurückgegeben.

# Unit-Tests

Schreiben Sie jeweils einen Unit-Test für die Funktionen is_ipv6_packet, shorten_ipv6_address und is_loopback_address.Benennen Sie die Test-Funktionen jeweils mit dem Präfix "test_", gefolgt von dem Namen der zu testenden Funktion, z. B. test_is_ipv6_packet().