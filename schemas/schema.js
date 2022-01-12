// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      title: "Пост оруулах",
      name: "post",
      type: "document",
      fields: [
        {
          title: "Постын гарчиг",
          name: "title",
          type: "string",
          description: "50 temdegtees iluu buu hetruuleerei!",
          // validation: Rule => [
          //   Rule.required().min(10).error('10 тэмдэгтээс их байх хэрэгтэй.'),
          //   Rule.max(50).warning('Гарчиг богинохон байх тусмаа сайн.'),
          //   Rule.max(60).error('Гарчиг 60 тэмдэгтээс хэтрэхгүй байх хэрэгтэй.'),
          // ]
        },
        {
          title: "Дэд гарчиг",
          name: "subtitle",
          type: "string",
          description: "Postiin turul",
        },
        {
          title: "Нийтлэгч",
          name: "publisher",
          type: "reference",
          to: [{ type: "publisher" }],
        },
        {
          title: "Постын зураг",
          name: "cover_image",
          type: "image",
          fields: [
            {
              title: "Зургийн тайлбар",
              name: "alt",
              type: "text",
            },
          ],
          options: {
            hotspot: true,
          },
        },
        {
          name: "content",
          type: "array",
          title: "Постын агуулга",
          of: [
            {
              type: "block",
            },
            {
              type: "image",
              fields: [
                {
                  title: "Зургийн байрлал",
                  name: "position",
                  type: "string",
                  options: {
                    isHighlighted: true,
                    list: [
                      {
                        title: "Голлуулах",
                        value: "center",
                      },
                      {
                        title: "Зүүн талд",
                        value: "left",
                      },

                      {
                        title: "Баруун талд",
                        value: "right",
                      },
                    ],
                    layout: "radio",
                  },
                },
                {
                  title: "Зургийн тайлбар",
                  name: "alt",
                  type: "text",
                  options: {
                    isHighlighted: true,
                  },
                },
              ],
              options: {
                hotspot: true, // hicheel 60
              },
            },
            {
              type: "code",
              withFilename: true,
            },
          ],
        },
        {
          title: "Огноо",
          name: "date",
          type: "datetime",
          description: "Postiin zurag",
        },
        {
          title: "Хаяг",
          name: "slug",
          type: "slug",
          options: {
            source: "title",
            slugify: (input) =>
              input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
          },
        },
      ],
    },
    {
      title: "Нийтлэгч",
      name: "publisher",
      type: "document",
      fields: [
        {
          title: "Нийтлэгчийн нэр",
          name: "title",
          type: "string",
        },
        {
          title: "Зураг",
          name: "picture",
          type: "image",
        },
      ],
    },
  ]),
});
