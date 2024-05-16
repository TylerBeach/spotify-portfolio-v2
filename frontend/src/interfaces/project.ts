export interface Project {
    id: string;
    title: string;
    cardDescription?: string | null;
    paragraphData?: { paragraphTitle: string; paragraphContent: string }[] | null;
    link?: string | null;
    imageURL?: string | undefined;
    bannerURL?: string | undefined;
    demoImages?: { image: string; caption: string;}[] | null;
    techStack?: string[] | null;
    date?: string | null;
 }
 