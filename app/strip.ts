export const strip = (str: string) => {
    return str.replace('[[', '').replace(']]', '')
}