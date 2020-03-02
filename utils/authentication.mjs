import crypto from "crypto";

//@TODO: save in enviroment
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
export const encrypt = text => {
    const cipher = crypto.createCipheriv(
        "aes-256-cbc",
        Buffer.from(key),
        iv
    );
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return {
        iv: iv.toString('hex'),
        encryptedData: encrypted.toString('hex')
    };
}
//@TODO: extra character in decrypt
//@TODO: understanding crypto
export const decrypt = text => {
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    decipher.setAutoPadding(false); // automatically remove PKCS padding
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
};