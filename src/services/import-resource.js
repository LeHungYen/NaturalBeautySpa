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