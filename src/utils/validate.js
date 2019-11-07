/**
 * Created by sn on 2019/3/21.
 */

//字符合法性验证
const validate = {
    numberLetter: /^[a-zA-z0-9]+$/,
    username: /^[a-zA-z0-9]{6,20}$/,
    password: /^.{6,20}$/,
    captcha: /^[a-zA-z0-9]{4}$/,
}

export  default validate

