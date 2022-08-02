import Header from "./components/Header/Header";
import "./global.css";
import "./App.css";
import SideBar from "./components/SideBar/SiderBar";
import Post from "./components/Post/Post";

//author :{avatar_url: "", name: "", role:""}
//publisheAt:DateTime
//content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1527335480088-278dbeec0ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      name: "Bmalkes",
      role: "Front End Developer",
    },
    content: [
      { type: "paragraph", content: "Hey guys" },
      {
        type: "paragraph",
        content:
          "I just uploaded another project in my portfolio, and a project I did at the nlw rocketseat event",
      },
      { type: "link", content: "#new project #nlw #rocketseat" },
    ],
    publisheAt: new Date("2022-08-01 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
      name: "Clark Kent",
      role: "BackEnd Developer",
    },
    content: [
      { type: "paragraph", content: "Hey guys👌👌👌👌👌👌" },
      {
        type: "paragraph",
        content:
          "I just uploaded another project in my portfolio, and a project I did at the nlw rocketseat event",
      },
      { type: "link", content: "#new project #nlw #rocketseat" },
    ],
    publisheAt: new Date("2022-08-05 20:00:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "Peter Parker",
      role: "FullStack Developer",
    },
    content: [
      { type: "paragraph", content: "Hey guys 👌👌" },
      {
        type: "paragraph",
        content:
          "I just uploaded another project in my portfolio, and a project I did at the nlw rocketseat event",
      },
      { type: "link", content: "#new project #nlw #rocketseat" },
    ],
    publisheAt: new Date("2022-08-01 20:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className="Wrapper">
        <SideBar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publisheAt={post.publisheAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
