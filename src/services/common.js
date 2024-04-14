export async function getResourceImage(imageName) {
    try {
        const resourceModule = await import(`../assets/${imageName}`);
        return resourceModule.default;
    } catch (ex) {
        console.log(ex)
        const resourceModule = await import("../assets/loading.gif");
        return resourceModule.default;
    }
}

export default function hasAccessCookie() {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();

        if (cookie.startsWith('customer-access-cookie=')) {
            return true;
        }
    }

    return false;
}