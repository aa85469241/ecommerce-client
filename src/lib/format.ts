export function priceFormat(price: number) {
    return price.toLocaleString("zh-TW", { style: 'currency', currency: 'TWD' });
}

export function emailFormat(email: string) {
    const isGoogleAuth = email.includes("googleauth-");

    if (isGoogleAuth) {
        return email.replace("googleauth-", "");
    }

    return email
}