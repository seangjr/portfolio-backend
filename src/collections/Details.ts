import { CollectionConfig } from "payload/types";
const Details: CollectionConfig = {
    slug: "details",
    auth: false,
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "workdetails",
            type: "relationship",
            relationTo: "works",
            hasMany: false,
        },
        {
            name: "siteUrl",
            label: "Site URL",
            type: "text",
            required: true,
        },
        {
            name: "source",
            type: "text",
            required: true,
        },
        {
            name: "overview",
            type: "text",
            required: true,
        },
        {
            name: "mockupImageSp",
            label: "Mockup Image (SP)",
            type: "upload",
            relationTo: "media",
            required: true,
        },
        {
            name: "mockupImagePc",
            label: "Mockup Image (PC)",
            type: "upload",
            relationTo: "media",
            required: true,
        },
        {
            name: "mockupImageTab",
            label: "Mockup Image (Tablet)",
            type: "upload",
            relationTo: "media",
            required: true,
        },
        {
            name: "projectImageWide",
            label: "Wide Project Image",
            type: "upload",
            relationTo: "media",
            required: true,
        },
        {
            name: "projectDetailsImage",
            label: "Project Details Image",
            type: "upload",
            relationTo: "media",
            required: true,
        },
        {
            name: "role",
            type: "text",
            required: true,
        },
        {
            name: "productionDate",
            type: "date",
            required: true,
        },
        {
            name: "productionDuration",
            type: "text",
            required: true,
        },
        {
            name: "languages",
            type: "text",
            required: true,
        },
        {
            name: "tools",
            type: "text",
            required: true,
        },
    ],
};

export default Details;
