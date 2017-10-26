function FindProxyForURLEx(url, host) {
    var proxymatt = "PROXY 192.168.2.145:8124; PROXY 192.168.2.136:8122; PROXY 192.168.1.37:8123; DIRECT";
    var proxybill = "PROXY 192.168.1.37:8123; PROXY 192.168.2.145:8124; PROXY 192.168.2.136:8122; DIRECT";
    var proxymain = proxymatt;
    var proxyalt = proxybill;
    var patterns = [{
            "name": "Local",
            "url": "*192.168.*.*",
            "regex": ".*192\\.168\\..*\\..*",
            "enabled": true,
            "temp": false,
            "whitelist": "Inclusive",
            "type": "wildcard"
        }],
        white = -1;
    for (var i = 0, sz = patterns.length; i < sz; i++) {
        // ProxyPattern instances
        var p = patterns[i];
        if (p.enabled) {
            if (RegExp(p.regex).test(url)) {
                if (p.whitelist != "Inclusive") {
                    // Black takes priority over white -- skip this pattern
                    return "DIRECT";
                } else if (white == -1) {
                    white = i; // store first matched index and continue checking for blacklist matches!
                }
            }
        }
    }
    if (white != -1) return "DIRECT";

    /*
    var patterns = [{
            "name": "YouTube",
            "url": "*.youtube.com*",
            "regex": ".*\\.youtube\\.com.*",
            "enabled": true,
            "temp": false,
            "whitelist": "Inclusive",
            "type": "wildcard"
        }],
        white = -1;
    for (var i = 0, sz = patterns.length; i < sz; i++) {
        // ProxyPattern instances
        var p = patterns[i];
        if (p.enabled) {
            if (RegExp(p.regex).test(url)) {
                if (p.whitelist != "Inclusive") {
                    // Black takes priority over white -- skip this pattern
                    return "PROXY 192.168.2.145:8124; PROXY 192.168.1.37:8123; DIRECT";
                } else if (white == -1) {
                    white = i; // store first matched index and continue checking for blacklist matches!
                }
            }
        }
    }
    if (white != -1) return "PROXY 192.168.2.136:8122";
    */
    
    var patterns = [{
            "name": "Pandora",
            "url": "*.pandora.com*",
            "regex": ".*(?!music)\\.pandora\\.com.*",
            "enabled": true,
            "temp": false,
            "whitelist": "Inclusive",
            "type": "wildcard"
        }],
        white = -1;
    for (var i = 0, sz = patterns.length; i < sz; i++) {
        // ProxyPattern instances
        var p = patterns[i];
        if (p.enabled) {
            if (RegExp(p.regex).test(url)) {
                if (p.whitelist != "Inclusive") {
                    // Black takes priority over white -- skip this pattern
                    //return "PROXY 192.168.2.136:8122";
                    return "proxymain";
                } else if (white == -1) {
                    white = i; // store first matched index and continue checking for blacklist matches!
                }
            }
        }
    }
    //if (white != -1) return "PROXY 192.168.2.145:8124; PROXY 192.168.1.37:8123; DIRECT";
    if (white != -1) return "PROXY 192.168.2.136:8122";

    // If the IP address of the local machine is within a defined
    // subnet, send to a specific proxy.
    if (isInNet(myIpAddress(), "192.168.2.0", "255.255.255.0"))
        return "proxymatt";
    if (isInNet(myIpAddress(), "192.168.1.0", "255.255.255.0"))
        return "proxybill";
    if (isInNet(myIpAddress(), "192.168.4.0", "255.255.255.0"))
        return "proxymatt";
    if (isInNet(myIpAddress(), "192.168.3.0", "255.255.255.0"))
        return "proxymatt";
    
    var patterns = [{
            "name": "Instagram",
            "url": "*.instagram.com*",
            "regex": ".*\\.instagram\\.com.*",
            "enabled": true,
            "temp": false,
            "whitelist": "Inclusive",
            "type": "wildcard"
        }],
        white = -1;
    for (var i = 0, sz = patterns.length; i < sz; i++) {
        // ProxyPattern instances
        var p = patterns[i];
        if (p.enabled) {
            if (RegExp(p.regex).test(url)) {
                if (p.whitelist != "Inclusive") {
                    // Black takes priority over white -- skip this pattern
                    //return "PROXY 192.168.2.136:8122";
                    return "proxymain";
                } else if (white == -1) {
                    white = i; // store first matched index and continue checking for blacklist matches!
                }
            }
        }
    }
    //if (white != -1) return "PROXY 192.168.2.145:8124; PROXY 192.168.1.37:8123; DIRECT";
    if (white != -1) return "proxymain";
    
    var patterns = [{
            "name": "FBCDN",
            "url": "*.fbcdn.net*",
            "regex": ".*\\.fbcdn\\.net.*",
            "enabled": true,
            "temp": false,
            "whitelist": "Inclusive",
            "type": "wildcard"
        }],
        white = -1;
    for (var i = 0, sz = patterns.length; i < sz; i++) {
        // ProxyPattern instances
        var p = patterns[i];
        if (p.enabled) {
            if (RegExp(p.regex).test(url)) {
                if (p.whitelist != "Inclusive") {
                    // Black takes priority over white -- skip this pattern
                    //return "PROXY 192.168.2.136:8122";
                    return "proxymain";
                } else if (white == -1) {
                    white = i; // store first matched index and continue checking for blacklist matches!
                }
            }
        }
    }
    //if (white != -1) return "PROXY 192.168.2.145:8124; PROXY 192.168.1.37:8123; DIRECT";
    if (white != -1) return "proxymain";
    
    // DEFAULT RULE: All other traffic, use below proxies, in fail-over order.
    return "proxymain";
}

function FindProxyForURL(url, host) {
    var proxymatt = '"PROXY 192.168.2.145:8124; PROXY 192.168.2.136:8122; PROXY 192.168.1.37:8123; DIRECT"';
    var proxybill = '"PROXY 192.168.1.37:8123; PROXY 192.168.2.145:8124; PROXY 192.168.2.136:8122; DIRECT"';
    var proxymain = proxymatt;
    var proxyalt = proxybill;
    var patterns = [{
            "name": "Local",
            "url": "*192.168.*.*",
            "regex": ".*192\\.168\\..*\\..*",
            "enabled": true,
            "temp": false,
            "whitelist": "Inclusive",
            "type": "wildcard"
        }],
        white = -1;
    for (var i = 0, sz = patterns.length; i < sz; i++) {
        // ProxyPattern instances
        var p = patterns[i];
        if (p.enabled) {
            if (RegExp(p.regex).test(url)) {
                if (p.whitelist != "Inclusive") {
                    // Black takes priority over white -- skip this pattern
                    return "DIRECT";
                } else if (white == -1) {
                    white = i; // store first matched index and continue checking for blacklist matches!
                }
            }
        }
    }
    if (white != -1) return "DIRECT";

    /*
    var patterns = [{
            "name": "YouTube",
            "url": "*.youtube.com*",
            "regex": ".*\\.youtube\\.com.*",
            "enabled": true,
            "temp": false,
            "whitelist": "Inclusive",
            "type": "wildcard"
        }],
        white = -1;
    for (var i = 0, sz = patterns.length; i < sz; i++) {
        // ProxyPattern instances
        var p = patterns[i];
        if (p.enabled) {
            if (RegExp(p.regex).test(url)) {
                if (p.whitelist != "Inclusive") {
                    // Black takes priority over white -- skip this pattern
                    return "PROXY 192.168.2.145:8124; PROXY 192.168.1.37:8123; DIRECT";
                } else if (white == -1) {
                    white = i; // store first matched index and continue checking for blacklist matches!
                }
            }
        }
    }
    if (white != -1) return "PROXY 192.168.2.136:8122";
    */
    
    var patterns = [{
            "name": "Pandora",
            "url": "*.pandora.com*",
            "regex": ".*(?!music)\\.pandora\\.com.*",
            "enabled": true,
            "temp": false,
            "whitelist": "Inclusive",
            "type": "wildcard"
        }],
        white = -1;
    for (var i = 0, sz = patterns.length; i < sz; i++) {
        // ProxyPattern instances
        var p = patterns[i];
        if (p.enabled) {
            if (RegExp(p.regex).test(url)) {
                if (p.whitelist != "Inclusive") {
                    // Black takes priority over white -- skip this pattern
                    //return "PROXY 192.168.2.136:8122";
                    return "proxymain";
                } else if (white == -1) {
                    white = i; // store first matched index and continue checking for blacklist matches!
                }
            }
        }
    }
    //if (white != -1) return "PROXY 192.168.2.145:8124; PROXY 192.168.1.37:8123; DIRECT";
    if (white != -1) return "PROXY 192.168.2.136:8122";

    // If the IP address of the local machine is within a defined
    // subnet, send to a specific proxy.
    if (isInNet(myIpAddress(), "192.168.2.0", "255.255.255.0"))
        return "proxymatt";
    if (isInNet(myIpAddress(), "192.168.1.0", "255.255.255.0"))
        return "proxybill";
    if (isInNet(myIpAddress(), "192.168.4.0", "255.255.255.0"))
        return "proxymatt";
    if (isInNet(myIpAddress(), "192.168.3.0", "255.255.255.0"))
        return "proxymatt";
    
    var patterns = [{
            "name": "Instagram",
            "url": "*.instagram.com*",
            "regex": ".*\\.instagram\\.com.*",
            "enabled": true,
            "temp": false,
            "whitelist": "Inclusive",
            "type": "wildcard"
        }],
        white = -1;
    for (var i = 0, sz = patterns.length; i < sz; i++) {
        // ProxyPattern instances
        var p = patterns[i];
        if (p.enabled) {
            if (RegExp(p.regex).test(url)) {
                if (p.whitelist != "Inclusive") {
                    // Black takes priority over white -- skip this pattern
                    //return "PROXY 192.168.2.136:8122";
                    return "proxymain";
                } else if (white == -1) {
                    white = i; // store first matched index and continue checking for blacklist matches!
                }
            }
        }
    }
    //if (white != -1) return "PROXY 192.168.2.145:8124; PROXY 192.168.1.37:8123; DIRECT";
    if (white != -1) return "proxymain";
    
    var patterns = [{
            "name": "FBCDN",
            "url": "*.fbcdn.net*",
            "regex": ".*\\.fbcdn\\.net.*",
            "enabled": true,
            "temp": false,
            "whitelist": "Inclusive",
            "type": "wildcard"
        }],
        white = -1;
    for (var i = 0, sz = patterns.length; i < sz; i++) {
        // ProxyPattern instances
        var p = patterns[i];
        if (p.enabled) {
            if (RegExp(p.regex).test(url)) {
                if (p.whitelist != "Inclusive") {
                    // Black takes priority over white -- skip this pattern
                    //return "PROXY 192.168.2.136:8122";
                    return "proxymain";
                } else if (white == -1) {
                    white = i; // store first matched index and continue checking for blacklist matches!
                }
            }
        }
    }
    //if (white != -1) return "PROXY 192.168.2.145:8124; PROXY 192.168.1.37:8123; DIRECT";
    if (white != -1) return "proxymain";
    
    // DEFAULT RULE: All other traffic, use below proxies, in fail-over order.
    return "proxymain";
}
