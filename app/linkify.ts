import { strip } from "./strip"

export const linkify = (str: string, links: Record<string, string>) => {
    return strip(Object.keys(links).reduce((str, linkText, idx, arr) => {
        const linkDest = links[linkText]
        return str.replace(`\[\[${linkText}\]\]`, `<a href='${linkDest}' target='_blank'>${linkText}</a>`)
    }, str))
}