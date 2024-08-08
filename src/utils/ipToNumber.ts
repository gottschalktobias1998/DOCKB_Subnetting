export function ipToNumber(ip: string): number
{
    return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet), 0);
}