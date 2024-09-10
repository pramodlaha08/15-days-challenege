
export default function copyPassword() {
    let passwordBox = document.getElementById('password').value;

    navigator.clipboard.writeText(passwordBox).then(() => {
        alert('Text copied to clipboard!' + passwordBox);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

