/*
Write a module Converter that can take ASCII text and convert it to hexadecimal. The class should also be able to take hexadecimal and convert it to ASCII text. To make the conversion well defined, each ASCII character is represented by exactly two hex digits, left-padding with a 0 if needed. The conversion from ascii to hex should produce lowercase strings (i.e. f6 instead of F6).

Example
Converter.toHex("Look mom, no hands")
=> "4c6f6f6b206d6f6d2c206e6f2068616e6473"

Converter.toAscii("4c6f6f6b206d6f6d2c206e6f2068616e6473")
=> "Look mom, no hands"
*/

var Converter = {
  toAscii: function (hex) {
    return hex.replace(/.{1,2}/g, match => {
      return String.fromCharCode(parseInt(match, 16));
    });
  },
  toHex: function (ascii) {
    return ascii.replace(/./g, match => {
      return match.charCodeAt().toString(16);
    });
  }
}