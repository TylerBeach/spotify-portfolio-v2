export interface About {
id?: string;
title: string;
firstName?: string;
lastName?: string;
bannerURL?: string;
paragraphs?: { title: string; image: string; paragraphContent: string}[];
link?: string | null;
}
 