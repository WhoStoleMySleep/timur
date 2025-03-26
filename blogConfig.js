/**
 * This files contains all the meta data of your blog. Feel
 * free to change it according to your needs. Please
 * keep in mind, that the actual blog posts are fetched
 * from the Caasy API. This file only contains static
 * information that does not change such as the name
 * of the blog.
 */
export default {
  caasySDKConfig: {
    siteId: "67e4483335a2d11aeac80d38",
  },
  blogName: "Музыкальные новости",
  defaultTitle: "Главная",
  description: "Музыкальные новости",
  // The default language is used to improve accessibility.
  // It is set on the HTML element. You can change this
  // to the main language of your content.
  defaultLanguage: "en",
  // The locale is used for multi language content. This
  // feature hasn't been released yet. Please don't change
  // this until Caasy fully supports multi language content.
  locale: "en_US",
  social: {
    github: "https://github.com",
    youtube: "https://youtube.com",
  },
  footer: {
    links: [
      {
        title: "",
        items: [{ label: "", url: "https://caasy.io" }],
      },
    ],
  },
};
