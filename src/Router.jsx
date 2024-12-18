import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutTheme1 from "./component/Layout/LayoutTheme1";
import LayoutThemeDark from "./component/Layout/LayoutThemeDark";
import Home from "./pages/home";
import Error from "./pages/home/404";
import About from "./pages/home/about";
import Archive from "./pages/home/archive";
import AudioPost1 from "./pages/home/audio_post1";
import AudioPost2 from "./pages/home/audio_post2";
import AudioPost3 from "./pages/home/audio_post3";
import Business from "./pages/home/business";
import Contact from "./pages/home/contact";
import Entertainment from "./pages/home/entertainment";
import Feature from "./pages/home/Feature";
import LeftPost2 from "./pages/home/left_post2";
import Post1 from "./pages/home/post1";
import Post2 from "./pages/home/post2";
import Post3 from "./pages/home/post3";
import Sports from "./pages/home/sports";
import Trending from "./pages/home/trending";
import VideoPost1 from "./pages/home/video_post1";
import VideoPost2 from "./pages/home/video_post2";
import VideoPost3 from "./pages/home/video_post3";
import HomeDark from "./pages/homeDark";
import HomeDarkError from "./pages/homeDark/404";
import HomeDarkAbout from "./pages/homeDark/about";
import HomeDarkArchive from "./pages/homeDark/archive";
import HomeDarkAudioPost1 from "./pages/homeDark/audio_post1";
import HomeDarkAudioPost2 from "./pages/homeDark/audio_post2";
import HomeDarkAudioPost3 from "./pages/homeDark/audio_post3";
import HomeDarkBusiness from "./pages/homeDark/business";
import HomeDarkContact from "./pages/homeDark/contact";
import HomeDarkEntertainment from "./pages/homeDark/entertainment";
import HomeDarkFeature from "./pages/homeDark/Feature";
import HomeDarkLeftPost2 from "./pages/homeDark/left_post2";
import HomeDarkPost1 from "./pages/homeDark/post1";
import HomeDarkPost2 from "./pages/homeDark/post2";
import HomeDarkPost3 from "./pages/homeDark/post3";
import HomeDarkSports from "./pages/homeDark/sports";
import HomeDarkTrending from "./pages/homeDark/trending";
import HomeDarkVideoPost1 from "./pages/homeDark/video_post1";
import HomeDarkVideoPost2 from "./pages/homeDark/video_post2";
import HomeDarkVideoPost3 from "./pages/homeDark/video_post3";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LayoutTheme1,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/business",
        element: <Business />,
      },
      {
        path: "/entertainment",
        element: <Entertainment />,
      },
      {
        path: "/features",
        element: <Feature />,
      },
      {
        path: "/trending",
        element: <Trending />,
      },
      {
        path: "/sports",
        element: <Sports />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/archive",
        element: <Archive />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/404",
        element: <Error />,
      },
      {
        path: "/post1",
        element: <Post1 />,
      },
      {
        path: "/post2",
        element: <Post2 />,
      },
      {
        path: "/post3",
        element: <Post3 />,
      },
      {
        path: "/video_post1",
        element: <VideoPost1 />,
      },
      {
        path: "/video_post2",
        element: <VideoPost2 />,
      },
      {
        path: "/video_post3",
        element: <VideoPost3 />,
      },
      {
        path: "/audio_post1",
        element: <AudioPost1 />,
      },
      {
        path: "/audio_post2",
        element: <AudioPost2 />,
      },
      {
        path: "/audio_post3",
        element: <AudioPost3 />,
      },
      {
        path: "/left_post2",
        element: <LeftPost2 />,
      },
    ],
  },
  {
    path: "/dark",
    Component: LayoutThemeDark,
    children: [
      {
        index: true,
        element: <HomeDark />,
      },
      {
        path: "business",
        element: <HomeDarkBusiness />,
      },
      {
        path: "entertainment",
        element: <HomeDarkEntertainment />,
      },
      {
        path: "features",
        element: <HomeDarkFeature />,
      },
      {
        path: "trending",
        element: <HomeDarkTrending />,
      },
      {
        path: "sports",
        element: <HomeDarkSports />,
      },
      {
        path: "about",
        element: <HomeDarkAbout />,
      },
      {
        path: "archive",
        element: <HomeDarkArchive />,
      },
      {
        path: "contact",
        element: <HomeDarkContact />,
      },
      {
        path: "404",
        element: <HomeDarkError />,
      },
      {
        path: "post1",
        element: <HomeDarkPost1 />,
      },
      {
        path: "post2",
        element: <HomeDarkPost2 />,
      },
      {
        path: "post3",
        element: <HomeDarkPost3 />,
      },
      {
        path: "video_post1",
        element: <HomeDarkVideoPost1 />,
      },
      {
        path: "video_post2",
        element: <HomeDarkVideoPost2 />,
      },
      {
        path: "video_post3",
        element: <HomeDarkVideoPost3 />,
      },
      {
        path: "audio_post1",
        element: <HomeDarkAudioPost1 />,
      },
      {
        path: "audio_post2",
        element: <HomeDarkAudioPost2 />,
      },
      {
        path: "audio_post3",
        element: <HomeDarkAudioPost3 />,
      },
      {
        path: "left_post2",
        element: <HomeDarkLeftPost2 />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
