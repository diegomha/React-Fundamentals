import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: { 
      avatarUrl: 'https://github.com/diegomha.png',
      name: 'Diego Miguel Halcsick',
      role: 'Full Stack Developer' 
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!!!!' },
      { type: 'paragraph', content: 'Acabei de subir mais um novo projeto no meu portifa. É um projeto que eu fiz utilizando o react.' },
      { type: 'link', content: 'https://github.com/diegomha' },
      { type: 'link', content: '#newproject #react' }
    ],
    publishedAt : Date.now() - 10
  },
  {
    id: 2,
    author: { 
      avatarUrl: 'https://github.com/danilomhre.png',
      name: 'Danilo Miguel',
      role: 'PHP Full Stack Developer' 
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um novo projeto no meu portifa. É um projeto que eu fiz utilizando o react.' },
      { type: 'link', content: 'https://github.com/diegomha' },
      { type: 'link', content: '#newproject #react' }
    ],
    publishedAt : Date.now() - 10
  }
];

function App() {
  return (
    <div>
        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
           
          <main>
            {posts.map(post => {
                return (
                  <Post 
                    key={post.id}
                    author = {post.author}
                    content = {post.content}
                    publishedAt = {post.publishedAt}
                  />
                )
              })  
            }
          </main>
        </div>
    </div>
  )
}

export default App
