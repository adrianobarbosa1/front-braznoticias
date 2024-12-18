export const menus = [
  {
    id: 1,
    linkText: "Home",
    child: true,
    icon: "angle-down",
    submenu: [
      {
        id: 11,
        link: "/",
        linkText: "Home 1",
      },
      {
        id: 12,
        link: "/dark",
        linkText: "Home Dark",
      },
      {
        id: 13,
        new: true,
        link: "/home-two",
        linkText: "Home 2",
      },
      {
        id: 14,
        link: "/home-three",
        linkText: "Home 3",
      },
    ],
  },
  {
    id: 2,
    linkText: "Pages",
    child: true,
    icon: "angle-down",
    submenu: [
      {
        id: 21,
        link: "/about",
        linkText: "About",
      },
      {
        id: 22,
        link: "/archive",
        linkText: "Archive",
      },
      {
        id: 23,
        link: "/contact",
        linkText: "Contact Us",
      },
      {
        id: 24,
        link: "/404",
        linkText: "404",
      },
    ],
  },
  {
    id: 3,
    linkText: "Posts",
    child: true,
    icon: "angle-down",
    submenu: [
      {
        id: 31,
        child: true,
        linkText: "General Posts",
        third_menu: [
          {
            id: 311,
            link: "/post1",
            linkText: "Post 1",
          },
          {
            id: 312,
            link: "/post2",
            linkText: "Post 2",
          },
          {
            id: 313,
            link: "/post3",
            linkText: "Post 3",
          },
        ],
      },
      {
        id: 32,
        child: true,
        linkText: "Video Posts",
        third_menu: [
          {
            id: 321,
            link: "/video_post1",
            linkText: "Video Style 1",
          },
          {
            id: 322,
            link: "/video_post2",
            linkText: "Video Style 2",
          },
          {
            id: 323,
            link: "/video_post3",
            linkText: "Video Style 3",
          },
        ],
      },
      {
        id: 33,
        child: true,
        linkText: "Audio Posts",
        third_menu: [
          {
            id: 331,
            link: "/audio_post1",
            linkText: "Audio Style 1",
          },
          {
            id: 332,
            link: "/audio_post2",
            linkText: "Audio Style 2",
          },
          {
            id: 333,
            link: "/audio_post3",
            linkText: "Audio Style 3",
          },
        ],
      },
      {
        id: 34,
        child: true,
        linkText: "Sidebars",
        third_menu: [
          {
            id: 341,
            link: "/post1",
            linkText: "Right Sidebar",
          },
          {
            id: 342,
            link: "/left_post2",
            linkText: "Left Sidebar",
          },
          {
            id: 343,
            link: "/post2",
            linkText: "No Sidebar",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    linkText: "Categories",
    child: true,
    icon: "angle-down",
    submenu: [
      {
        id: 41,
        link: "/business",
        linkText: "Business",
      },
      {
        id: 42,
        link: "/entertainment",
        linkText: "Entertainment",
      },
      {
        id: 43,
        link: "/features",
        linkText: "Features",
      },
      {
        id: 44,
        link: "/sports",
        linkText: "Sports",
      },
      {
        id: 45,
        link: "/trending",
        linkText: "Trending",
      },
    ],
  },
  {
    id: 5,
    linkText: "World",
    link: "/world",
  },
  {
    id: 6,
    linkText: "Sports",
    link: "/sports",
  },
  {
    id: 7,
    linkText: "Contact",
    link: "/contact",
  },
];

export const menusDark = [
  {
    id: 1,
    linkText: "Home",
    child: true,
    icon: "angle-down",
    submenu: [
      {
        id: 11,
        link: "/",
        linkText: "Home 1",
      },
      {
        id: 12,
        link: "/dark",
        linkText: "Home Dark",
      },
      {
        id: 13,
        new: true,
        link: "/home-two",
        linkText: "Home 2",
      },
      {
        id: 14,
        link: "/home-three",
        linkText: "Home 3",
      },
    ],
  },
  {
    id: 2,
    linkText: "Pages",
    child: true,
    icon: "angle-down",
    submenu: [
      {
        id: 21,
        link: "/dark/about",
        linkText: "About",
      },
      {
        id: 22,
        link: "/dark/archive",
        linkText: "Archive",
      },
      {
        id: 23,
        link: "/dark/contact",
        linkText: "Contact Us",
      },
      {
        id: 24,
        link: "/dark/404",
        linkText: "404",
      },
    ],
  },
  {
    id: 3,
    linkText: "Posts",
    child: true,
    icon: "angle-down",
    submenu: [
      {
        id: 31,
        child: true,
        linkText: "General Posts",
        third_menu: [
          {
            id: 311,
            link: "/dark/post1",
            linkText: "Post 1",
          },
          {
            id: 312,
            link: "/dark/post2",
            linkText: "Post 2",
          },
          {
            id: 313,
            link: "/dark/post3",
            linkText: "Post 3",
          },
        ],
      },
      {
        id: 32,
        child: true,
        linkText: "Video Posts",
        third_menu: [
          {
            id: 321,
            link: "/dark/video_post1",
            linkText: "Video Style 1",
          },
          {
            id: 322,
            link: "/dark/video_post2",
            linkText: "Video Style 2",
          },
          {
            id: 323,
            link: "/dark/video_post3",
            linkText: "Video Style 3",
          },
        ],
      },
      {
        id: 33,
        child: true,
        linkText: "Audio Posts",
        third_menu: [
          {
            id: 331,
            link: "/dark/audio_post1",
            linkText: "Audio Style 1",
          },
          {
            id: 332,
            link: "/dark/audio_post2",
            linkText: "Audio Style 2",
          },
          {
            id: 333,
            link: "/dark/audio_post3",
            linkText: "Audio Style 3",
          },
        ],
      },
      {
        id: 34,
        child: true,
        linkText: "Sidebars",
        third_menu: [
          {
            id: 341,
            link: "/dark/post1",
            linkText: "Right Sidebar",
          },
          {
            id: 342,
            link: "/dark/left_post2",
            linkText: "Left Sidebar",
          },
          {
            id: 343,
            link: "/dark/post2",
            linkText: "No Sidebar",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    linkText: "Categories",
    child: true,
    icon: "angle-down",
    submenu: [
      {
        id: 41,
        link: "/dark/business",
        linkText: "Business",
      },
      {
        id: 42,
        link: "/dark/entertainment",
        linkText: "Entertainment",
      },
      {
        id: 43,
        link: "/dark/features",
        linkText: "Features",
      },
      {
        id: 44,
        link: "/dark/sports",
        linkText: "Sports",
      },
      {
        id: 45,
        link: "/dark/trending",
        linkText: "Trending",
      },
    ],
  },
  {
    id: 5,
    linkText: "World",
    link: "/dark/world",
  },
  {
    id: 6,
    linkText: "Sports",
    link: "/dark/sports",
  },
  {
    id: 7,
    linkText: "Contact",
    link: "/dark/contact",
  },
];
