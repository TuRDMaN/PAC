function FindProxyForURL(url, host) {
    // Populate variables for proxy chain configs
    var proxypi = "PROXY 192.168.1.18:8124";
    var proxybiggie = "PROXY 192.168.1.56:8123";
    var proxyvpn = "PROXY 192.168.1.56:8122";
    var proxypine = "PROXY 192.168.1.17:8124";    
    var proxyunraid = "PROXY 192.168.1.36:8123";
    var proxyvpn2 = "PROXY 192.168.1.36:8121";
    //var proxydido = "PROXY 192.168.3.12:3128";
    //var mattchain = proxypi+"; "+proxybiggie+"; "+proxydido+"; "+proxypine+"; "+proxyunraid+"; "+proxyvpn+"; DIRECT";
    var mattchain = proxypi+"; "+proxypine+"; "+proxybiggie+"; "+proxyunraid+"; "+proxyvpn+"; "+proxyvpn2+"; DIRECT";
    //var billchain = proxypine+"; "+proxyunraid+"; "+proxypi+"; "+proxybiggie+"; "+proxydido+"; "+proxyvpn+"; DIRECT";
    var billchain = proxypine+"; "+proxypi+"; "+proxyunraid+"; "+proxybiggie+"; "+proxyvpn2+"; "+proxyvpn+"; DIRECT";
    //var didochain = proxydido+"; "+proxypi+"; "+proxybiggie+"; "+proxypine+"; "+proxyunraid+"; "+proxyvpn+"; DIRECT";
    var proxymain = mattchain;
    var proxyalt = billchain;
    var proxyUS = proxyvpn+"; "+proxyvpn2;
    
    // Begin PAC
    var patterns = [{
            "name": "Localhost",
            "url": "*127.0.0.1*",
            "regex": ".*127\\.0\\.0\\.1.*",
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
    
    var patterns = [{
            "name": "Localhost2",
            "url": "*localhost*",
            "regex": ".*localhost.*",
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
    if (white != -1) return proxyUS;
    */
      
    var patterns = [{
            "name": "Pandora",
            "url": "*.pandora.com*",
            //"regex": ".*(?!((audio)|(music)))\\.pandora\\.com.*",
            "regex": ".*\\.pandora\\..*",
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
                    return proxymain;
                } else if (white == -1) {
                    white = i; // store first matched index and continue checking for blacklist matches!
                }
            }
        }
    }    
    if (white != -1) return proxyUS;

    // If the IP address of the local machine is within a defined
    // subnet, send to a specific proxy.
    //if (dnsResolve("wpad.matt.lan"))
    //    return mattchain;
    //if (dnsResolve("wpad.bill.lan"))
    //    return billchain;    
    
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
    
    var patterns = [{
            "name": "Snapchat",
            "url": "*.snapchat.com*",
            "regex": ".*\\.snapchat\\.com.*",
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

var FindProxyForURLEx = FindProxyForURL.bind({});

//##############################################################
//##############################################################
