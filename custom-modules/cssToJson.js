/**
 * Created by jyothi on 15/4/17.
 */
class CustomJsonCSS {
    constructor(options){
        //TODO: if any
    }

    /**
     * return JSON output for CSS string
     * @param text {String}
     * @returns {Object}
     */
    toJSON = text => {
        if(typeof text !== 'string'){
            console.error("Need a CSS string but given ", typeof text, text);
            return "Not a valid CSS..! [NOT STRING]";
        }
        let output = {}, lastKey, term, style, _this = this;
        try {
            text.split("{").forEach(item => {
                term = item.trim();
                if (term) {
                    if (term.indexOf("}") === -1) {
                        output[term] = {}; //it's a selector
                        lastKey = term;
                    } else { //contains styles and next selector
                        term.substring(0, term.indexOf("}")).split(";").forEach(keyValue => {
                            style = keyValue.split(":");
                            if (style && style.length === 2) {
                            	if(output == null){
                            		console.error("OUTPUT IS NULL");
                            	}

                            	if(output[lastKey] == null){
                            		console.error("output[lastKey] IS NULL");
                            		output[lastKey] = {};
                            		if(output[lastKey] == null){
                            		console.error("output[lastKey] IS STILL NULL");
	                            	}else{
	                            		console.log("output[lastKey] WAS MANUALLY SET");
	                            	}
                            	}

                                output[lastKey][style[0].trim().replace(/^\"|\"$/g, '')] = this._trimSemiColon(style[1].trim().replace(/^\"|\"$/g, '')); //for new style
                            }
                        });
                        try { //may be End of Styles
                            lastKey = term.split("}")[1].trim();
                            if (lastKey) {
                                output[lastKey] = {}; //for new selector
                            }
                        } catch (e) {
                            //no more selectors for our life
                        }
                    }
                }
            });
        }catch(e){
        	console.error(e);
            return "Not a valid CSS..! [ENTERED CATCH STATEMENT]";
        }
        return output;
    };

    /**
     *
     * @param json {Object}
     * @returns {string}
     */
    toCSS = json => {
        if (typeof json !== 'object') {
            console.error("Need a JSON object but given ", typeof json, json);
            return "Not a valid JSON..!";
        }
        let output = "";
        try {
            for (let selector in json) {
                if (json.hasOwnProperty(selector)) {
                    output += selector + ' {\n';
                    for (let style in json[selector]) {
                        if (json[selector].hasOwnProperty(style)) {
                            output += style + ': ' + json[selector][style] + ';\n';
                        }
                    }
                    output += '}\n';
                }
            }
        } catch (e) {
            return "Not a valid JSON..!";
        }
        return output;
    };

    /**
     *
     * @param text {string}
     * @returns {ArrayBuffer|Blob|Array.<T>|string}
     * @private
     */
    _trimSemiColon = (text) => {
        return text.slice(-1) === ';' ? text.slice(0, this.length - 1) : text;
    };

    //TODO: support for media queries

}

module.exports = CustomJsonCSS;