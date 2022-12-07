import { CollectionConfig } from "payload/types";
const Media: CollectionConfig = {
    slug: "media",
    upload: {
        staticURL: "/media",
        staticDir: "media",
        mimeTypes: ["image/jpeg", "image/png", "image/gif"],
    },
    fields: []
}

export default Media;