const RSS = require('rss');
import { EPISODES } from "@/app/episodes";

const feed = new RSS({
    title: 'The Art of Flow',
    description: 'Fire dancing, flow arts, and prop manipulation podcast',
    // TODO update this with correct address
    feed_url: 'http://artofflowpodcast.com/feed/rss.xml',
    site_url: 'http://artofflowpodcast.com',
    image_url: 'https://artofflow.s3.us-west-2.amazonaws.com/rss/logo.png',
    managingEditor: 'Mackenzie Dolginow',
    webMaster: 'Mackenzie Dolginow',
    copyright: '2024 Mackenzie Dolginow',
    language: 'en',
    categories: ['Flow arts', 'Fire spinning', 'Fire dancing'],
    pubDate: 'April 17, 2024 04:00:00 GMT',
    ttl: '60',
    custom_namespaces: {
        'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd'
    },
    custom_elements: [
        { 'itunes:subtitle': 'Fire dancing, flow arts, and prop manipulation podcast' },
        { 'itunes:author': 'Morgan Dolginow' },
        { 'itunes:summary': 'The Art of Flow is a free public resource for creators, teachers, and supporters of the arts who are interested in flow arts and fire-dancing. The podcast is dedicated to conversations on the creative process to provide inspirations for your own movement arts and creativity journey. Explore how to connect to your body, mind, and soul by hearing conversations with flow artists and try out their suggestions yourself.' },
        {
            'itunes:owner': [
                { 'itunes:name': 'Morgan Dolginow' },
                { 'itunes:email': 'morgandolginow@gmail.com' }
            ]
        },
        {
            'itunes:image': {
                _attr: {
                    href: 'https://artofflow.s3.us-west-2.amazonaws.com/rss/logo.png'
                }
            }
        },
        {
            'itunes:category': [
                {
                    _attr: {
                        text: 'Flow arts'
                    }
                },
                {
                    'itunes:category': {
                        _attr: {
                            text: 'Fire spinning'
                        }
                    }
                }
            ]
        }
    ]
});

// TODO actual duration, length in bytes, dates
Object.values(EPISODES).forEach(episode => {
    feed.item({
        title: episode.title,
        description: episode.description,
        url: episode.audioSrc,
        guid: episode.audioSrc,
        author: 'Morgan Dolginow',
        date: 'May 27, 2012',
        lat: 33.417974,
        long: -111.933231,
        enclosure: { url: episode.audioSrc, type: 'audio/mpeg', length: 1 },
        custom_elements: [
            { 'itunes:author': 'Morgan Dolginow' },
            { 'itunes:subtitle': episode.title },
            {
                'itunes:image': {
                    _attr: {
                        href: episode.image
                    }
                }
            },
            { 'itunes:duration': '7:04' }
        ]
    });
})

const xml = feed.xml();
console.log(xml)

const Page = () => { };

export default Page;