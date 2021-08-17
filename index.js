const ffi = require('ffi-napi');

/**
 * 提供一个32位dll，文档如下：
 * int __stdcall ReadPassWords(unsigned char *nCardData,unsigned char *PassWord_s);
 *
 * nCardData (IN) :传入数据0X00-0X15
 * PassWord_s(OUT)：密码
*/

const myDll = new ffi.Library('./WriteCardInterface', {
  'ReadPassWords': // 声明这个dll中的一个函数
    [
      'int', ['string', 'string'], // 用json的格式罗列其返回类型和参数类型
    ],
});

const result = myDll.ReadPassWords('Aa123456', 'Aa123456');
console.log(`the result of 1 + 2 is: `+ result);
