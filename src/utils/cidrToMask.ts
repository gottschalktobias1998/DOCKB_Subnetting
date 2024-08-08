export function cidrToMask(cidr: number): number 
{
    return (0xFFFFFFFF << (32 - cidr)) >>> 0;
}