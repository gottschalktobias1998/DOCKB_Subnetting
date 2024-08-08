import { cidrToMask, dotDecimalToMask, ipToNumber, numberToIp } from "./utils/utils";

function ipv4_info(ip: string, subnet: string) {
    let subnetMask: number;
    
        if (subnet.includes('/')) {
            // CIDR notation
            const cidr = parseInt(subnet.slice(1));
            subnetMask = cidrToMask(cidr);
        } else {
            // Dot-decimal notation
            subnetMask = dotDecimalToMask(subnet);
        }
    
        const ipNumber = ipToNumber(ip);
        const networkAddress = ipNumber & subnetMask;
        const broadcastAddress = networkAddress | (~subnetMask >>> 0);
        const numOfAddresses = (broadcastAddress - networkAddress) + 1;
    
        console.log('Subnetzadresse (erste Adresse):', numberToIp(networkAddress));
        console.log('Limited-Broadcast-Adresse (letzte Adresse):', numberToIp(broadcastAddress));
        console.log('Anzahl der Adressen im Subnetz:', numOfAddresses);
    }
    
    // Example usage:
    ipv4_info('192.168.1.10', '255.255.255.0');
    ipv4_info('192.168.1.10', '/24');
    