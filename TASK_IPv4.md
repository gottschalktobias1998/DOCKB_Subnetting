# Aufgabe 1 - ipv4_info
Schreiben Sie eine Funktion ipv4_info(...), die eine IPv4-Adresse und eine Subnetzmaske als Parameter erhält und folgende Werte auf der Konsole ausgibt:

die erste Adresse des Subnetzes (Subnetzadresse),
die letzte Adresse des Subnetzes (Limited-Broadcast-Adresse) und
die Anzahl der Adressen in diesem Subnetz.
Die Funktion soll die Subnetzmaske sowohl in der "Dot-decimal notation" (z. B. 255.255.255.0) als auch in der "CIDR notation" (z. B. /24) verstehen können.

# Aufgabe 2 - calculate_mask_from_blocksize

Schreiben Sie eine Funktion calculate_mask_from_blocksize(...), die für eine gegebene Anzahl von IPv4-Adressen, die im selben Subnetz liegen sollen, die Subnetzmaske für das kleinste Subnetz bestimmt, in das die gegebene Anzahl von IPv4-Adressen passt.

Nutzen Sie die Funktion ipv4_info(...), um Ihre Lösung zu überprüfen.

# Aufgabe 3 - is_broadcast_address

Schreiben Sie eine Funktion is_broadcast_address(...), die eine IPv4-Adresse und eine Subnetzmaske erhält und true ausgibt, wenn die Adresse eine Broadcast-Adresse ihres Subnetzes ist.

# Aufgabe 4 - Unit-Tests

Schreiben Sie jeweils einen Unit-Test für die Funktionen ipv4_info(...), calculate_mask_from_blocksize(...) und is_broadcast_address(...). Benennen Sie die Test-Funktionen jeweils mit dem Präfix "test_", gefolgt von dem Namen der zu testenden Funktion, z. B. test_ipv4_info().