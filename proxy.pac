function FindProxyForURL(url, host) {

// If the hostname matches, send direct.
//    if (dnsDomainIs(host, "intranet.domain.com") ||
//        shExpMatch(host, "(*.abcdomain.com|abcdomain.com)"))
//        return "DIRECT";
    if (dnsDomainIs(host, "*.matt.lan") ||
        shExpMatch(host, "(*.matt.lan|matt.lan)") ||
        shExpMatch(host, "(millar.my.to)") ||
        shExpMatch(host, "(mbf.my.to)"))
        return "DIRECT";


// If the hostname matches, send to proxy.
    if (dnsDomainIs(host, "music.pandora.com") ||
        shExpMatch(host, "(*music.pandora.com)"))
        return "PROXY 192.168.2.145:8124; PROXY 192.168.1.37:8123; DIRECT";
    if (dnsDomainIs(host, "pandora.com") ||
        shExpMatch(host, "(*.pandora.com)") ||
        shExpMatch(host, "(*.cc.com)"))
        return "PROXY 192.168.2.136:8122";

// If the protocol or URL matches, send direct.
//    if (url.substring(0, 4)=="ftp:" ||
//        shExpMatch(url, "http://abcdomain.com/folder/*"))
//        return "DIRECT";

// If the requested website is hosted within the internal network, send direct.
    if (isPlainHostName(host) ||
        shExpMatch(host, "*.local") ||
        isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
        isInNet(dnsResolve(host), "172.16.0.0",  "255.240.0.0") ||
        isInNet(dnsResolve(host), "192.168.0.0",  "255.255.0.0") ||
        isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0"))
        return "DIRECT";
 
// If the IP address of the local machine is within a defined
// subnet, send to a specific proxy.
    if (isInNet(myIpAddress(), "192.168.2.0", "255.255.255.0"))
        return "PROXY 192.168.2.145:8124; PROXY 192.168.1.37:8123; DIRECT";
    if (isInNet(myIpAddress(), "192.168.1.0", "255.255.255.0"))
        return "PROXY 192.168.1.37:8123; PROXY 192.168.2.145:8124; DIRECT";
    if (isInNet(myIpAddress(), "192.168.4.0", "255.255.255.0"))
        return "PROXY 192.168.1.37:8123; PROXY 192.168.2.145:8124; DIRECT";
    if (isInNet(myIpAddress(), "192.168.3.0", "255.255.255.0"))
        return "PROXY 192.168.2.145:8124; PROXY 192.168.1.37:8123; DIRECT";
 
// DEFAULT RULE: All other traffic, use below proxies, in fail-over order.
    return "DIRECT";
 
}
