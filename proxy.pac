function FindProxyForURLEx(url, host) {
    // Populate variables for proxy chain configs
    var proxymatt = "PROXY 192.168.2.145:8124";
    var proxyvpn = "PROXY 192.168.2.136:8122";
    var proxybill = "PROXY 192.168.1.37:8123";
    var proxyalt = proxymatt+"; "+proxyvpn+"; "+proxybill+"; DIRECT";
    var proxymain = proxybill+"; "+proxymatt+"; "+proxyvpn+"; DIRECT";
    var mattchain = proxymatt+"; "+proxyvpn+"; "+proxybill+"; DIRECT";
    var billchain = proxybill+"; "+proxymatt+"; "+proxyvpn+"; DIRECT";
    
    // Begin PAC
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
            "regex": ".*(?!((audio)|(music)))\\.pandora\\.com.*",
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
                    return proxymain;
                } else if (white == -1) {
                    white = i; // store first matched index and continue checking for blacklist matches!
                }
            }
        }
    }
    //if (white != -1) return "PROXY 192.168.2.145:8124; PROXY 192.168.1.37:8123; DIRECT";
    if (white != -1) return proxyvpn;

    // If the IP address of the local machine is within a defined
    // subnet, send to a specific proxy.
    if (dnsResolve("wpad.matt.lan"))
        return mattchain;
    if (dnsResolve("wpad.bill.lan"))
        return billchain;    
    
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
                    return proxymain;
                } else if (white == -1) {
                    white = i; // store first matched index and continue checking for blacklist matches!
                }
            }
        }
    }
    //if (white != -1) return "PROXY 192.168.2.145:8124; PROXY 192.168.1.37:8123; DIRECT";
    if (white != -1) return proxymain;
    
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
                    return proxymain;
                } else if (white == -1) {
                    white = i; // store first matched index and continue checking for blacklist matches!
                }
            }
        }
    }
    //if (white != -1) return "PROXY 192.168.2.145:8124; PROXY 192.168.1.37:8123; DIRECT";
    if (white != -1) return proxymain;
    
    // DEFAULT RULE: All other traffic, use below proxies, in fail-over order.
    return proxymain;
}

//##############################################################
//##############################################################
//##############################################################
//##############################################################

function FindProxyForURL(url, host) {
    // Populate variables for proxy chain configs
    var proxymatt = "PROXY 192.168.2.145:8124";
    var proxyvpn = "PROXY 192.168.2.136:8122";
    var proxybill = "PROXY 192.168.1.37:8123";
    var proxyalt = proxymatt+"; "+proxyvpn+"; "+proxybill+"; DIRECT";
    var proxymain = proxybill+"; "+proxymatt+"; "+proxyvpn+"; DIRECT";
    var mattchain = proxymatt+"; "+proxyvpn+"; "+proxybill+"; DIRECT";
    var billchain = proxybill+"; "+proxymatt+"; "+proxyvpn+"; DIRECT";
    
    // Begin PAC
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
            "regex": ".*(?!((audio)|(music)))\\.pandora\\.com.*",
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
                    return proxymain;
                } else if (white == -1) {
                    white = i; // store first matched index and continue checking for blacklist matches!
                }
            }
        }
    }
    //if (white != -1) return "PROXY 192.168.2.145:8124; PROXY 192.168.1.37:8123; DIRECT";
    if (white != -1) return proxyvpn;

    // If the IP address of the local machine is within a defined
    // subnet, send to a specific proxy.
    if (dnsResolve("wpad.matt.lan"))
        return mattchain;
    if (dnsResolve("wpad.bill.lan"))
        return billchain;    
    
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
                    return proxymain;
                } else if (white == -1) {
                    white = i; // store first matched index and continue checking for blacklist matches!
                }
            }
        }
    }
    //if (white != -1) return "PROXY 192.168.2.145:8124; PROXY 192.168.1.37:8123; DIRECT";
    if (white != -1) return proxymain;
    
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
                    return proxymain;
                } else if (white == -1) {
                    white = i; // store first matched index and continue checking for blacklist matches!
                }
            }
        }
    }
    //if (white != -1) return "PROXY 192.168.2.145:8124; PROXY 192.168.1.37:8123; DIRECT";
    if (white != -1) return proxymain;
    
    // DEFAULT RULE: All other traffic, use below proxies, in fail-over order.
    return proxymain;
}
