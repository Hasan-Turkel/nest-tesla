const { pbkdf2Sync } = require('crypto'),
    keyCode = "dkjfgfbcmbnvc165fdfsfs+7131..",
    loopCount = 1000,
    charCount = 32,
    encType = 'sha512';

export function encodePassword (password) {
    return pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')
}