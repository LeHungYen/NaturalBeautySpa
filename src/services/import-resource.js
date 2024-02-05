export async function getResourceImage(imageName) {
    try {
        const resourceModule = await import(`../assests/${imageName}`);
        return resourceModule.default;
    } catch (ex) {
        console.log(ex)
        const resourceModule = await import("../assests/loading.gif");
        return resourceModule.default;
    }
}