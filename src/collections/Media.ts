import { CollectionConfig } from "payload/types";
const Media: CollectionConfig = {
    slug: "media",
    access: {
        read: () => true,
    },
    upload: {
        staticURL: "/media",
        staticDir: "/media",
        mimeTypes: ["image/jpeg", "image/png", "image/gif"],
    },
    fields: [
        {
            name: "Alt text",
            type: "text",
        }
    ]
}

export default Media;