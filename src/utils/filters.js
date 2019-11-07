/**
 * Created by sn on 2017/3/12.
 */
import config from '@/config';
import moment from 'moment';//日期格式化类库

const filters = {
    //上传地址解析
    uploadPathParse: (str, defaultImgUrl) => {
        if (!str) {
            str = defaultImgUrl ? defaultImgUrl : config.defaultImgUrl;
            return str;
        }
        if (!str.match(/^(http:)|(https:)|(\/\/)/)) {
            str = config.uploadUrl + str;
        }
        return str;
    },
    //日期格式化
    formatDate: (value, formatString) => {
        formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
        return moment(value).format(formatString);
        return todayDate;
    },
    //xss转义
    xss: (str) => {
        var s = "";
        if (!str || str.length == 0)
            return "";
        s = str.replace(/&/g, "&amp;");
        s = s.replace(/</g, "&lt;");
        s = s.replace(/>/g, "&gt;");
        s = s.replace(/ /g, "&nbsp;");
        s = s.replace(/\'/g, "&#39;");
        s = s.replace(/\"/g, "&quot;");
        return s;
    },
    //格式化日期
    formatDate: (time) => {
        var now = new Date();
        if (time) {
            now = time;
        }
        var mm = now.getMonth() + 1;     //月
        var dd = now.getDate();          //日
        var hh = now.getHours();         //时
        var ii = now.getMinutes();       //分
        var ss = now.getSeconds();       //秒
        var clock = "";
        if (mm < 10)
            clock += "0";
        clock += mm + "-";
        if (dd < 10)
            clock += "0";
        clock += dd + " ";
        if (hh < 10)
            clock += "0";
        clock += hh + ":";
        if (ii < 10)
            clock += '0';
        clock += ii + ":";
        if (ss < 10)
            clock += '0';
        clock += ss;
        return clock;
    },
    getCookie: (name, cookie=null) => {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        cookie=cookie?cookie:document.cookie;
        if (arr =cookie.match(reg))
            return decodeURIComponent(arr[2]);
        else
            return null;
    }

};
export default filters;
