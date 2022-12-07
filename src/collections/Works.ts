import { CollectionConfig } from "payload/types";
const Works: CollectionConfig = {
    slug: "works",
    auth: false,
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "title",
            type: "text",
            label: "Title",
            required: true,
        },
        {
            name: "description",
            type: "text",
            label: "Description",
            required: true,
        },
        {
            name: "dataId",
            type: "text",
            label: "Data ID",
            required: true,
        },
        {
            name: "classId",
            type: "text",
            label: "Class ID",
            required: true,
        },
        {
            name: "slug",
            type: "text",
            required: true,
        },
        {
            name: "scope",
            type: "text",
            required: true,
        },
        {
            name: "category",
            type: "text",
            required: true,
        },
        {
            name: "dataBg",
            type: "text",
            label: "Work Page Background (#xxxxxx)",
            required: true,
        },
    ],
};

export default Works;
