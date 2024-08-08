export function cidrToMask(cidr: number): number 
{
    return (0xFFFFFFFF << (32 - cidr)) >>> 0;
}


// Classless Inter-Domain Routing
// https://de.wikipedia.org/wiki/Classless_Inter-Domain_Routing