export interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "platforms", path: "/platforms", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "media", path: "/media", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
  { key: "multiplayer", path: "/multiplayer", isContentType: true },
  { key: "technical", path: "/technical", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.key);
