const yog = require('yog2-kernel');

export function log (msg = '', err = {}, type = 'fatal') {
    yog.log[type]({
        stack: err,
        msg: msg + err,
        custom: err
    });
    console.log(msg, custom);
}

export function stringFormat () {
    return {
        base: (str) => str
            .replace(/\\/g, '\\\\')
            .replace(/\$/g, '\$')
        ,
        run: function(data) {
            try {
                if (data && typeof data == 'object') {
                    for (var i in data) {
                        data[i] = this.base(data[i])
                    };
                } else if (data && typeof data == 'string') {
                    data = this.base(data);
                }
            } catch (e) {
                util.log('stringFormat XSS error:', e);
            }
            return data;
        }
    }
};

export function removeXss () {
    return {
        base: (str) => str
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            //.replace(/&/g, '')
            .replace(/"/g, '&quot;')
            //.replace(/'/g, '')
            .replace(/\s/g, '&nbsp;')
        ,
        run: function(data) {
            try {
                if (data && typeof data == 'object') {
                    for (var i in data) {
                        data[i] = this.base(data[i])
                    };
                }
                else if (data && typeof data == 'string') {
                    data = this.base(data);
                }
            }
            catch (e) {
                //util.log('interfacePath remove XSS error:', e);
            }
            return data;
        }
    };
};
