import { StructuredTextDocument, StructuredTextGraphQlResponse } from "react-datocms"

export type ResponsiveImage = {
    alt?: string;
    aspectRatio: number;
    height: number;
    width: number;
    sizes: string;
    src: string;
    srcSet: string;
    title?: string;
    webpSrcSet: string;
}

export type CoverImage = {
    responsiveImage: ResponsiveImage
}

export type ArticleThumbnail = {
    id: string;
    category: string;
    title: string;
    date: string;
    author: string;
    coverImage: CoverImage;
    content: string;
    abstract: string;
    slug: string
}

export type StructuredTextContent = {
    value: StructuredTextDocument
    links: Object
}

export type Article = {
    author: string;
    blogText: StructuredTextGraphQlResponse;
    coverImage: CoverImage;
    blogAssets: ResponsiveImage[]
    category: string;
    date: string;
    slug: string;
    id: string;
    title: string;
}