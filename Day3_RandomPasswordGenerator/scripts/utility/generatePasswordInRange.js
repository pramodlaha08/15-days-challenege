function getRandomCharFromRange(min, max) {
    return String.fromCharCode(Math.floor(Math.random() * (max - min + 1)) + min);
}

export default function generatePasswordUsingRanges(length) {
    let password = '';
    password += getRandomCharFromRange(65, 90);
    password += getRandomCharFromRange(97, 122);
    password += getRandomCharFromRange(48, 57);
    password += '!@#$%^&*()_+[]{}|;:,.<>?'[Math.floor(Math.random() * 22)];

    for (let i = 4; i < length; i++) {
        const randomSet = Math.floor(Math.random() * 4);
        if (randomSet === 0) password += getRandomCharFromRange(65, 90);
        else if (randomSet === 1) password += getRandomCharFromRange(97, 122);
        else if (randomSet === 2) password += getRandomCharFromRange(48, 57);
        else password += '!@#$%^&*()_+[]{}|;:,.<>?'[Math.floor(Math.random() * 22)];
    }

    return password.split('').sort(() => 0.5 - Math.random()).join('');
}

