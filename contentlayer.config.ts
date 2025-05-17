import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

export const Work = defineDocumentType(() => ({
  name: "Work",
  filePathPattern: `works/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    excerpt: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
    featured: {
      type: "boolean",
      default: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("works/", ""),
    },
  },
}))

export const Note = defineDocumentType(() => ({
  name: "Note",
  filePathPattern: `notes/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    excerpt: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      default: [],
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("notes/", ""),
    },
  },
}))

export const Product = defineDocumentType(() => ({
  name: "Product",
  filePathPattern: `products/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    price: {
      type: "number",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    inStock: {
      type: "boolean",
      default: true,
    },
    dimensions: {
      type: "string",
      required: false,
    },
    materials: {
      type: "list",
      of: { type: "string" },
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("products/", ""),
    },
  },
}))

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Work, Note, Product],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and
            // allow empty lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted")
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"]
          },
        },
      ],
    ],
  },
})
