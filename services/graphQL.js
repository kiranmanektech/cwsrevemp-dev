import axios from "axios";
const baseURL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
const headers = {
  "content-type": "application/json",
};
export default class GraphAPI {
  static themeOptions() {
    const themeQuery = `
        query ThemeQuery {
          acfOptionsThemeOptions {
            themeSettings {
              addressLink
              addressText
              email
              linkedinLink
              phone
              footerLogo {
                sourceUrl
              }
              headerLogo { 
                sourceUrl
              }
              contactBlockTitle
              contactBlockDescription
              contactBlockTagLine
            }
          }
        }
        `;
    const graphqlQuery = {
      operationName: "ThemeQuery",
      query: themeQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static companyDetails() {
    const companyQuery = `
      query CompanyQuery {
        pageBy(pageId: ${process.env.NEXT_PUBLIC_COMPANY_ID}) {
          companySettings {
            companyTitle
            companySubtitle
            founderBlock {
              blockIcon {
                sourceUrl
              }
              blockTitle
              blockDescription
              blockTagline
            }
            aboutFounder
            founderDescription
            founderName
            teamDescription
             testimonialBlocks {
              authorName
              authorImage {
                sourceUrl
              }
              authorDesignation
              authorDescription
            }
          }
        }
      }
      `;
    const graphqlQuery = {
      operationName: "CompanyQuery",
      query: companyQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static serviceDetails() {
    const serviceQuery = `query ServiceQuery {
  pageBy(pageId: ${process.env.NEXT_PUBLIC_SERVICE_PAGE}) {
    services {
      desktopBannerTitle
    }
  }
}`;
    const graphqlQuery = {
      operationName: "ServiceQuery",
      query: serviceQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }
  static teamDetails() {
    const teamQuery = `
    query TeamQuery {
      members(first:${process.env.NEXT_PUBLIC_TEAM_LIMIT}) {
      edges {
          node {
          title
          content
          featuredImage {
              node {
              sourceUrl
              }
          }
          memberSettings {
            memberDesignation
          }
          }
      }
      }
    }
    `;
    const graphqlQuery = {
      operationName: "TeamQuery",
      query: teamQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static portfolioDetails() {
    const portfolioQuery = `
    query PortfolioQuery {
      portfolioCategories(first: ${process.env.NEXT_PUBLIC_PORTFOLIO_CATEGORY_LIMIT}) {
        edges {
          node {
            name
            id
            slug
            portfolioCategoriesSettings {
              listDescription {
                listPoint
              }
              categoryIcon {
                sourceUrl
              }
            }
          }
        }
      }
    }
    `;
    const graphqlQuery = {
      operationName: "PortfolioQuery",
      query: portfolioQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static portfolioTags() {
    const portfolioTagsQuery = `
  query portfolioTags {
    portfolios (first: ${process.env.NEXT_PUBLIC_PORTFOLIO_TAGS_LIMIT}) {
      nodes {
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          portfolioSettings {
            launchedYear
            portfolioUrl
          }
        }
    }
  }
  `;
    const graphqlQuery = {
      operationName: "portfolioTags",
      query: portfolioTagsQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static allPortfolioSlug() {
    const allPortfolioQuery = `
    query allPortfolio {
      portfolios {
        nodes {
          slug
          id
        }
      }
    }
  `;
    const graphqlQuery = {
      operationName: "allPortfolio",
      query: allPortfolioQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static allPortfolioCat(first, after) {
    const afterCursor = after ? '"' + after + '"' : null;
    const allPortfolioQuery = `
    query allPortfolio {
    portfolioCategories {
      nodes {
        name
        slug
        portfolios(first: ${process.env.NEXT_PUBLIC_PORTFOLIO_LIST_LIMIT}) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            cursor
            node {
              featuredImage {
                node {
                  sourceUrl
                }
              }
              title
              slug
              portfolioSettings {
                launchedYear
                portfolioUrl
              }
              portfolioCategories {
                nodes {
                  name
                }
              }
              portfolioTags {
              nodes {
                slug
                name
                count
              }
            }
          }
        }
      }
    }
  }
}
  `;
    const graphqlQuery = {
      operationName: "allPortfolio",
      query: allPortfolioQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static allPortfolioTags(first) {
    const allPortfolioTagsQuery = `
    query allPortfolioTags {
    portfolioTags(first: ${first}) {
      nodes {
        slug
        name
        count
      }
    }
  }
  `;
    const graphqlQuery = {
      operationName: "allPortfolioTags",
      query: allPortfolioTagsQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static allPortfolioCatPagination(first, after, cat) {
    const afterCursor = after ? '"' + after + '"' : null;
    const catName = cat ? '"' + cat + '"' : null;
    const allPortfolioQuery = `
    query allPortfolio {
    portfolioCategories(where: {slug: ${catName}}) {
      nodes {
        name
        portfolios(first: ${first}, after: ${afterCursor}) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            cursor
            node {
              featuredImage {
                node {
                  sourceUrl
                }
              }
              title
              slug
              portfolioSettings {
                launchedYear
                portfolioUrl
              }
              portfolioCategories {
                nodes {
                  name
                }
              }
              portfolioTags {
              nodes {
                name
                slug
                count
              }
            }
            }
          }
        }
      }
    }
  }
  `;
    const graphqlQuery = {
      operationName: "allPortfolio",
      query: allPortfolioQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static solutionDetails() {
    const solutionQuery = `
  query SolutionQuery {
    pageBy(pageId: ${process.env.NEXT_PUBLIC_SOLUTION_ID}) {
      solutionsSettings {
        companyCards {
          companyCardDescription
          companyCardTitle
          companyCardImage {
            sourceUrl
          }
        }
        portfoliosToShowAsFeatured {
          ... on Portfolio {
            id
            portfolioSettings {
              launchedYear
              modalImage {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
  `;
    const graphqlQuery = {
      operationName: "SolutionQuery",
      query: solutionQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static portfolioCategoriesSettings(params) {
    const portfolioCategorySettingsQuery = `
  query PortfolioCategorySettingsQuery {
    portfolioCategories(where: {slug: "${params.slug}"}) {
      edges {
        node {
          id
          portfolioCategoriesSettings {
            listDescription {
              listPoint
            }
          }
        }
      }
    }
}
  `;
    const graphqlQuery = {
      operationName: "PortfolioCategorySettingsQuery",
      query: portfolioCategorySettingsQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static portfolioCategoriesListing() {
    const portfolioCategoryQuery = `
  query PortfolioCategoryQuery {
    portfolioCategories(first: 10) {
    edges {
        node {
        name
        slug
        }
    }
    }
}
  `;
    const graphqlQuery = {
      operationName: "PortfolioCategoryQuery",
      query: portfolioCategoryQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static websiteDesignAndDevelopment() {
    const websiteDesignAndDevelopmentQuery = `
  query websiteDesignAndDevelopmentQuery {
    pageBy(pageId: ${process.env.NEXT_PUBLIC_WEBSITE_DESIGN}) {
      websiteDesignAndDevelopment {
        bannerTitle
        bannerSubtitle
        bannerDescription
        bannerImage {
          sourceUrl
        }
        benefitsTitle
        benefitsBlocks {
          benefitBlockTitle
        }
        whyUsTitle
        whyUsDescription
        whyUsImage {
          sourceUrl
        }
        wordpressTitle
        wordpressDescription
        wordpressPointList {
          wordpressPoint
        }
        getQuoteLink
        customSitesTitle
        customSitesDescription
        customSitesImage {
          sourceUrl
        }
        customSitesBlocks {
          customSitesBlockTitle
        }
        serviceDetailsTitle
        serviceDetailsSubtitle
        serviceDetailsDescription
        seeOurWorkLink
        designBlockTitle
        designBlockSubTitle
        designBlockDescription
        seeOurWorkLinkDesign
      }
    }
  }
  `;
    const graphqlQuery = {
      operationName: "websiteDesignAndDevelopmentQuery",
      query: websiteDesignAndDevelopmentQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static webApplication() {
    const webApplicationQuery = `
  query webApplicationQuery {
    pageBy(pageId: ${process.env.NEXT_PUBLIC_WEB_APP}) {
      customSystemsWebApplicationDevelopment {
        pageHeading
        bannerTitle
        bannerSubtitle
        bannerDescription
        bannerImage {
          sourceUrl
        }
        benefitsTitle
        benefitsBlocks {
          benefitBlockTitle
        }
        whyUsHeading
        whyUsTitle
        whyUsDescription
        whyUsImage {
          sourceUrl
        }
        serviceDetailsHeading
        serviceDetailsTitle
        serviceDetailsSubtitle
        serviceDetailsDescription
        seeOurWorkLink
        industryDetailsTitle
        industryDetailsSubtitle
        industryDetailsDescription
        industryDetailsImage{
          sourceUrl
        }
      }
    }
  }
  `;
    const graphqlQuery = {
      operationName: "webApplicationQuery",
      query: webApplicationQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static socialMediaManagement() {
    const socialMediaManagementQuery = `
  query SocialMediaManagementQuery {
    pageBy(pageId: ${process.env.NEXT_PUBLIC_SOCIAL_MEDIA}) {
      SocialMediaManagement {
        pageHeading
        bannerTitle
        bannerSubtitle
        bannerDescription
        bannerImage {
          sourceUrl
        }
        benefitsTitle
        benefitsBlocks {
          benefitBlockTitle
        }
        whyUsHeading
        whyUsTitle
        whyUsDescription
        whyUsImage {
          sourceUrl
        }
        serviceDetailsHeading
        serviceDetailsDescription
        serviceDetailsContent{
          icon{
            sourceUrl
          }
          title
          content
          
        }
        automatedContent
        automatedImage
        {
          sourceUrl
        }
        automatedHeading
        automatedSubHeading
        maintainingBlogHeading
        maintainingBlogContent
        maintainingBlogImage{
          sourceUrl
        }
      }
    }
  }
  `;
    const graphqlQuery = {
      operationName: "SocialMediaManagementQuery",
      query: socialMediaManagementQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static ecomDetail() {
    const ecomDetailQuery = `
  query EcomDetailQuery {
    pageBy(pageId: ${process.env.NEXT_PUBLIC_ECOM_DETAIL}) {
      ecommerceSettings {
        bannerTagline
        bannerTitle
        bannerDescription
        bannerImage {
          sourceUrl
        }
        benefitBlocks {
          benefitBlockTitle
        }
        whyUsTitle
        whyUsDescription
        whyUsImage {
          sourceUrl
        }
        serviceDetailTitle
        serviceDetailImage {
          sourceUrl
        }
        serviceDetailDescription
        serviceDetailList {
          serviceDetailPoint
        }
        readyToSellText
      }
    }
  }
  `;
    const graphqlQuery = {
      operationName: "EcomDetailQuery",
      query: ecomDetailQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static hostingDetail() {
    const hostingDetailQuery = `
  query HostingDetailQuery {
    pageBy(pageId: ${process.env.NEXT_PUBLIC_HOSTING_DETAIL}) {
      hostingSettings {
        bannerTagline
        bannerTitle
        bannerDescription
        bannerImage {
          sourceUrl
        }
        whyUsTitle
        whyUsDescription
        whyUsImage {
          sourceUrl
        }
        heresWhyBlocks {
          blockTitle
          blockDescription
          blockTagline
          blockNotifications {
            notificationUserImage {
              sourceUrl
            }
            notificationUser
            notificationUsername
            notificationDescription
          }
        }
        serviceDetailTitle
        serviceDetailDescription
        serviceDetailImage {
          sourceUrl
        }
        serviceDetailPoints {
          serviceDetailPoint
        }
        contactBlockTitle
        contactBlockDescription
      }
    }
  }
  `;
    const graphqlQuery = {
      operationName: "HostingDetailQuery",
      query: hostingDetailQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static whiteLabelDetail() {
    const whiteLabelDetailQuery = `
  query whiteLabelDetailQuery {
    pageBy(pageId: ${process.env.NEXT_PUBLIC_WHITE_LABEL}) {
      whitelabelSettings {
        bannerTagline
        bannerTitle
        bannerDescription
        bannerImage {
          sourceUrl
        }
        benefitTagline
        benefitTitle
        benefitDescription
        benefitImage {
          sourceUrl
        }
        whyUsBlocks {
          whyUsBlockTitle
        }
        whiteLabelServiceTitle
        whiteLabelServicePoints {
          whiteLabelServicePoint
          whiteLabelServiceImage {
            sourceUrl
          }
        }
        contactBlockTitle
        contactBlockTagLine
        contactBlockDescription
      }
    }
    acfOptionsThemeOptions {
      themeSettings {
        email
        phone
        addressText
        addressLink
      }
    } 
  }
  `;
    const graphqlQuery = {
      operationName: "whiteLabelDetailQuery",
      query: whiteLabelDetailQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static propertyManagementDetail() {
    const propertyManagementDetailQuery = `
  query PropertyManagementDetailQuery {
    pageBy(pageId: ${process.env.NEXT_PUBLIC_PROPERTY_MANAGEMENT}) {
      propertyManagement {
        pageHeading
        bannerSubtitle
        bannerTitle
        bannerDescription
        mainHeading
        benefitsTitle
        benefitsDescription
        benefitsBlocks{
          benefitBlockTitle
        }
        benefitsLink{
          title
          url
        }
        whyUsHeading
        whyUsTitle
        whyUsDescription
        whyUsContent{
          icon{
            sourceUrl
          }
          title
          description
          buttonText
          buttonLink
        }
        serviceDetailsHeading
        serviceDetailsTitle
        serviceDetailsSubtitle
        serviceDetailsDescription
        serviceDetailsImage
        {
          sourceUrl
        }
        socialMediaHeading
        socialMediaDescription
        socialMediaImage{
          sourceUrl
        }
        flexiblePaymentOptionsHeading
        flexiblePaymentOptionsDescription
        flexiblePaymentOptionsImage{
          sourceUrl
        }
        experienceMarketingAndServiceHeading
        services{
          icon{
            sourceUrl
          }
          title
        }
        experienceMarketingButtonText
        experienceMarketingButtonUrl
        simplifiedPropertyManagementHeading
        propertyManagementScreens{
          screenImage{
            sourceUrl
          }
          screenWebsiteLink
        }
        propertyManagementButtonText
        propertyManagementButtonLink
      }
    }
  }
  `;
    const graphqlQuery = {
      operationName: "PropertyManagementDetailQuery",
      query: propertyManagementDetailQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static logoDesignandBrandingDetail() {
    const logoDesignandBrandingDetailQuery = `
  query LogoDesignandBrandingDetailQuery {
    pageBy(pageId: ${process.env.NEXT_PUBLIC_LOGO_BRANDING}) {
      logoDesignAndBrandingSettings {
        pageHeading
        bannerSubtitle
        bannerTitle
        bannerImage {
          sourceUrl
        }
        bannerDescription
        benefitsHeading
        benefitsBlocks {
          benefitBlockTitle
        }
        whyUsHeading
        whyUsTitle
        whyUsDescription
        whyUsImage{
          sourceUrl
        }
        servicesHeading
        service1Image{
          sourceUrl
        }
        service1Title
        service1Description
        service1ButtonText
        service1ButtonLink
        service2Image{
          sourceUrl
        }
        service2Title
        service2Description
        service2ButtonText
        service2ButtonLink
        service2Image{
          sourceUrl
        }
      }
    }
  }
  `;
    const graphqlQuery = {
      operationName: "LogoDesignandBrandingDetailQuery",
      query: logoDesignandBrandingDetailQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static printedMarketingDetail() {
    const printedMarketingDetailQuery = `
  query printedMarketingDetailQuery {
    pageBy(pageId: ${process.env.NEXT_PUBLIC_PRINTED_MARKETING}) {
      printedMarketingSettings {
        pageHeading
        bannerSubtitle
        bannerTitle
        bannerImage {
          sourceUrl
        }
        bannerDescription
        benefitsHeading
        benefitsBlocks {
          benefitBlockTitle
        }
        whyUsHeading
        whyUsTitle
        whyUsDescription
        whyUsImage{
          sourceUrl
        }
        servicesHeading
        service1Image{
          sourceUrl
        }
        service1Title
        service1Description
        service1ButtonText
        service1ButtonLink
        service2Image{
          sourceUrl
        }
        service2Title
        service2Description
        service2ButtonText
        service2ButtonLink
        service2Image{
          sourceUrl
        }
      }
    }
  }
  `;
    const graphqlQuery = {
      operationName: "printedMarketingDetailQuery",
      query: printedMarketingDetailQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static blogPagination(first, after) {
    const afterCursor = after ? '"' + after + '"' : null;
    const blogPaginationQuery = `
  query blogPaginationQuery {
    posts (first: ${first}, after: ${afterCursor}) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          title
          status
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          excerpt
          date
          content
          postSettings {
            authorName
            authorImage {
              sourceUrl
            }
            blogGridImage {
              sourceUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
          tags {
            nodes {
              name
            }
          }
        }
      }
    }
  }
  `;
    const graphqlQuery = {
      operationName: "blogPaginationQuery",
      query: blogPaginationQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static allPortfolio() {
    const allPortfolioQuery = `
    query allPortfolio {
    portfolioCategories {
      nodes {
        name
        slug
        portfolios(first: ${process.env.NEXT_PUBLIC_PORTFOLIO_LIST_LIMIT}) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            cursor
            node {
              featuredImage {
                node {
                  sourceUrl
                }
              }
              title
              slug
              portfolioSettings {
                launchedYear
                portfolioUrl
              }
              portfolioCategories {
                nodes {
                  name
                }
              }
              portfolioTags {
              nodes {
                slug
                name
                count
              }
            }
          }
        }
      }
    }
  }
}
  `;
    const graphqlQuery = {
      operationName: "allPortfolio",
      query: allPortfolioQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static justPortfolios() {
    const justPortfolios = `
    query justPortfolios {
      portfolios(first: ${process.env.NEXT_PUBLIC_PORTFOLIO_LIST_LIMIT}) {
        edges {
          cursor
          node {
            featuredImage {
              node {
                sourceUrl
              }
            }
            title
            slug
            portfolioSettings {
              launchedYear
              portfolioUrl
            }
            portfolioCategories {
              nodes {
                name
                slug
              }
            }
            portfolioTags {
              nodes {
                slug
                name
                count
              }
            }
          }
        }
      }
    }
  `;
    const graphqlQuery = {
      operationName: "justPortfolios",
      query: justPortfolios,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static allportfolioPagination(first, after) {
    const afterCursor = after ? '"' + after + '"' : null;
    const allportfolioPaginationQuery = `
  query allportfolioPaginationQuery {
    portfolios(first: ${process.env.NEXT_PUBLIC_PORTFOLIO_LIST_LIMIT}) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      cursor
      node {
        featuredImage {
          node {
            sourceUrl
          }
        }
        title
        slug
        portfolioSettings {
          launchedYear
          portfolioUrl
        }
        portfolioCategories {
          nodes {
            name
          }
        }
        portfolioTags {
        nodes {
          slug
          name
          count
        }
      }
      }
    }
  }
  }
  `;
    const graphqlQuery = {
      operationName: "allportfolioPaginationQuery",
      query: allportfolioPaginationQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static searchByBlog(keyword) {
    const searchByBlog = `
  query searchByBlog {
    posts(where: {search: "${keyword}"}) {
      edges {
        cursor
        node {
          title
          status
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          excerpt
          date
          content
          postSettings {
            authorName
            authorImage {
              sourceUrl
            }
            blogGridImage {
              sourceUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
          tags {
            nodes {
              name
            }
          }
        }
      }
    }
  }
  `;
    const graphqlQuery = {
      operationName: "searchByBlog",
      query: searchByBlog,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static blogListing() {
    const blogListingQuery = `
  query BlogListingQuery {
    pageBy(pageId: ${process.env.NEXT_PUBLIC_BLOG_LISTING}) {
      blogListingSettings {
        blogArticle
        blogDescription
        blogSubtitle
        blogTitle
        postNotFoundText
      }
    }
  }
  `;
    const graphqlQuery = {
      operationName: "BlogListingQuery",
      query: blogListingQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static blogPostListing() {
    const blogPostListingQuery = `
  query BlogPostListingQuery {
    posts(first: ${process.env.NEXT_PUBLIC_BLOG_LIST_LIMIT}) {
      edges {
        node {
          postId
          id
          slug
          title
          date
          content
          postSettings {
            authorName
            authorImage {
              sourceUrl
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
  `;
    const graphqlQuery = {
      operationName: "BlogPostListingQuery",
      query: blogPostListingQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static singlePortfolioSettings(params) {
    const singlePortfolioSettingsQuery = `
      query SinglePortfolioSettingsQuery {
        portfolioBy(uri: "/portfolio/${params.slug}/") {
        slug
        title
        portfolioSettings {
          launchedYear
          portfolioUrl
          portfolioGallery {
            sourceUrl
          }
        }
        portfolioCategories {
          nodes {
            name
          }
        }
        portfolioTags {
          nodes {
            slug
            name
          }
        }
        content
        portfolioId
      }
    }`;

    const graphqlQuery = {
      operationName: "SinglePortfolioSettingsQuery",
      query: singlePortfolioSettingsQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static singlePostSettings({ params }) {
    const singlePostSettingsQuery = `
  query SinglePostSettingsQuery {
    postBy(slug: "${params.slug}") {
          postId
          slug
          title
          date
          content
          postSettings {
            blogGridImage {
              sourceUrl
            }
            authorName
            authorImage {
              sourceUrl
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              categoryId
              name
            }
          }
          tags {
            nodes {
              name
            }
          }
    }
  }
  `;

    const graphqlQuery = {
      operationName: "SinglePostSettingsQuery",
      query: singlePostSettingsQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static relativePostSettings(catName, notIn) {
    const relativePostSettingsQuery = `
  query RelativePostSettingsQuery {
    posts(where: {categoryName: "${catName}", notIn: "${notIn}"}, first: ${process.env.NEXT_PUBLIC_BLOG_RELATIVE}) {
      edges {
        node {
          slug
          title
          date
          content
          excerpt
          postSettings {
            authorName
            authorImage {
              sourceUrl
            }
            blogGridImage {
              sourceUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
          tags {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
  `;

    const graphqlQuery = {
      operationName: "RelativePostSettingsQuery",
      query: relativePostSettingsQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static relativePortfolioSettings(catName, notIn) {
    console.log(catName, "cat");
    const relativePortfolioSettingsQuery = `
  query RelativePortfolioSettingsQuery {
  portfolioCategories(where: {name: "${catName}"}) {
    nodes {
      portfolios(where: {notIn: "${notIn}"}, first: ${process.env.NEXT_PUBLIC_BLOG_RELATIVE}) {
        nodes {
          slug
        title
        featuredImage {
                node {
                sourceUrl
                }
            }
        portfolioSettings {
          launchedYear
          portfolioUrl
          portfolioGallery {
            sourceUrl
          }
        }
        portfolioCategories {
          nodes {
            name
          }
        }
        portfolioTags {
          nodes {
            slug
            name
          }
        }
        content
        portfolioId
        }
      }
    }
  }
}`;

    const graphqlQuery = {
      operationName: "RelativePortfolioSettingsQuery",
      query: relativePortfolioSettingsQuery,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static clientTestimonialSettings() {
    const clientTestimonialSettings = `
  query ThemeQuery {
    acfOptionsThemeOptions {
    themeSettings {
        testimonialsThemeTitle
        testimonialsThemeSubtitle
        clientTestimonials {
        authorDescription
        authorDesignation
        authorImage {
            sourceUrl
        }
        authorName
        }
    }
  }
}
`;

    const graphqlQuery = {
      operationName: "ThemeQuery",
      query: clientTestimonialSettings,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static portfolioListingSettings() {
    const portfolioListingSettings = `
  query PortfolioListingSettings {
    portfolios(first:${process.env.NEXT_PUBLIC_TEAM_LIMIT}) {
        edges {
            node {
            title
            content
            featuredImage {
                node {
                sourceUrl
                }
            }
            portfolioSettings {
              launchedYear
                portfolioUrl
                modalImage {
                sourceUrl
                }
            }
        }
    }
}
}
`;

    const graphqlQuery = {
      operationName: "PortfolioListingSettings",
      query: portfolioListingSettings,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static seoSettings(uri) {
    var seoSettings;
    const regex = /\/blog\//;
    if (regex.test(uri)) {
      const updatedUri = uri.replace("/blog", "");
      seoSettings = `
  query SeoSettings {
    postBy(uri: "${updatedUri}") {
    seo {
      fullHead
       metaDesc
      metaKeywords
      opengraphDescription
      title
      opengraphUrl
      twitterDescription
      twitterTitle
      focuskw
      focuskw
      twitterImage {
        sourceUrl
      }
      opengraphImage {
        sourceUrl
      }
      opengraphTitle
      opengraphType
    }
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
}
`;
    } else {
      seoSettings = `
  query SeoSettings {
    pageBy(uri: "${uri}") {
    seo {
      fullHead
       metaDesc
      metaKeywords
      opengraphDescription
      title
      opengraphUrl
      twitterDescription
      twitterTitle
      focuskw
      focuskw
      twitterImage {
        sourceUrl
      }
      opengraphImage {
        sourceUrl
      }
      opengraphTitle
      opengraphType
    }
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
}
`;
    }

    const graphqlQuery = {
      operationName: "SeoSettings",
      query: seoSettings,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static homeSettings() {
    const homeSettings = `
  query HomeSettings {
    pageBy(pageId: ${process.env.NEXT_PUBLIC_HOME_ID}) {
      seo {
        fullHead
      }
      homeSettings {
        bannerTitle
        bannerSubtitle
        bannerVideoUrl
        friendlyTitle
        friendlyImage {
          sourceUrl
        }
        aboutTitle
        aboutSubtitle
        aboutSlider {
          aboutDomain
          domainUrl
        }
        whyUsBlocks {
          whyUsTitle
          whyUsDescription
        }
        businessTitle
        businessSubtitle
        businessImage {
          sourceUrl
        }
        businessImageSlider {
          businessImage {
            sourceUrl
          }
        }
        testimonialsTitle
        testimonialsSubtitle
        processMainTitle
        processBlocks {
          processImage {
            sourceUrl
          }
          processTitle
          processDescription
        }
      }
    }
  }
`;

    const graphqlQuery = {
      operationName: "HomeSettings",
      query: homeSettings,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static policySettings() {
    const policySettings = `
    query Policy {
       pageBy(pageId: ${process.env.NEXT_PUBLIC_POLICY}) {
    content
  }
    }
    `;
    const graphqlQuery = {
      operationName: "Policy",
      query: policySettings,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static abaSettings() {
    const abaSettings = `
    query ABAData {
  pageBy(pageId: ${process.env.NEXT_PUBLIC_ABA_PAGE}) {
    abaSettings {
      abaTitle
      abaDescription
      aboutImages {
        blockImage {
          sourceUrl
        }
      }
      aboutTitle
      bannerSubdescription
      bannerSubtitle
      bannerVideo {
        mediaItemUrl
      }
      benefitBlocks {
        icon {
          sourceUrl
        }
        title
      }
      benefitDescription
      benefitsTitle
      brandingDescription
      brandingTitle
      brochureTitle
      businessDescription
      businessTitle
      featureBlocks {
        featureBlockTitle
        featureImage {
          sourceUrl
        }
      }
      featureTitle
      listOfBrochures {
        brochureImage {
          sourceUrl
        }
      }
      seoDescription
      seoImage {
        sourceUrl
      }
      seoTitle
      serviceBlocks {
        serviceBlockTitle
        serviceBlockDescription
        serviceIcon {
          sourceUrl
        }
      }
      serviceTitle
      whyUsDescription
      whyUsTitle
    }
  }
}
    `;
    const graphqlQuery = {
      operationName: "ABAData",
      query: abaSettings,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static abaPortfolio() {
    const abaPortfolio = `
    query ABAPortfolio {
  portfolioTags(where: {slug: "${process.env.NEXT_PUBLIC_ABA_THERAPY}"}) {
    nodes {
      portfolios(first: ${process.env.NEXT_PUBLIC_TEAM_LIMIT}) {
        nodes {
          title
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
}
    `;
    const graphqlQuery = {
      operationName: "ABAPortfolio",
      query: abaPortfolio,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static abaLogoBrand() {
    const abaLogoBrand = `
    query abaLogoBrand {
  portfolioCategories(where: {slug: "${process.env.NEXT_PUBLIC_ABA_LOGO_BRANDS}"}) {
    nodes {
      portfolios(first: ${process.env.NEXT_PUBLIC_TEAM_LIMIT}) {
        nodes {
          title
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
}
    `;
    const graphqlQuery = {
      operationName: "abaLogoBrand",
      query: abaLogoBrand,
    };
    return axios({
      url: baseURL,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }
}

export function replaceImgUrls(obj) {
  if (typeof obj === "object") {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (
          (key === "sourceUrl" || key === "bannerVideoUrl") &&
          typeof obj[key] === "string"
        ) {
          obj[key] = obj[key].replace(
            "https://cms.cwsio.com",
            process.env.NEXT_PUBLIC_CDN_LINK
          );
        } else {
          replaceImgUrls(obj[key]);
        }
      }
    }
  } else if (Array.isArray(obj)) {
    obj.forEach((item) => replaceImgUrls(item));
  }
  return obj;
}
