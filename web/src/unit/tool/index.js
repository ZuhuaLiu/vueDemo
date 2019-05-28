/**
 * Created by wangbb on 2017/5/4.
 * public function tool
 */

export function formatDate(format, timestamp) {
	let jsdate = ((timestamp) ? new Date(timestamp) : new Date());
	let date = {
		"M+": jsdate.getMonth() + 1,
		"d+": jsdate.getDate(),
		"h+": jsdate.getHours(),
		"m+": jsdate.getMinutes(),
		"s+": jsdate.getSeconds(),
		"q+": Math.floor((jsdate.getMonth() + 3) / 3),
		"S+": jsdate.getMilliseconds()
	};

	if (/(y+)/i.test(format)) {
		format = format.replace(RegExp.$1, (jsdate.getFullYear() + '').substr(4 - RegExp.$1.length));
	}

	for (let k in date) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
		}
	}

	return format;
}

export function objTOFormData(object) {
	const formData = new FormData();
	Object.keys(object).forEach(key => formData.append(key, object[key]));
	return formData;
}

export function objToQueryString(object) {
	if (!object) {
		return '';
	}
	return '?' +
		Object.keys(object).map((key) =>
			encodeURIComponent(key) + '=' + encodeURIComponent(object[key])
		).join('&');
}

export function countTextLen(text) {
    if(!text) {
        return 0;
    }
	let textCharLen = 0;

	for (let i = 0, textLen = text.length; i < textLen; i++) {
        if (text.codePointAt(i) < 27 || text.codePointAt(i) > 126) { //全角
            textCharLen += 2;
        } else {
            textCharLen++;
        }
    }
    return textCharLen;
}

//字符串截断，text为字符串，totalCharlen为总字数（按英文字符算），extChar是可选参数，为超出补充的样式，默认为“...”
export function cutOffText(text, tatalCharLen, extChar = '...') {
    let i = 0,
        extDot = '',
        textCharLen = 0;

    if(!text) {
        return '';
    }

    for (let textLen = text.length; i < textLen; i++) {
        if (textCharLen >= tatalCharLen) {
            extDot = extChar;
            break;
        }
        if (text.codePointAt(i) < 27 || text.codePointAt(i) > 126) { //全角
            textCharLen += 2;
        } else {
            textCharLen++;
        }
    }
    return text.substring(0, i) + extDot;
};