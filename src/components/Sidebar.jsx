import styles from './Sidebar.module.css';
import { Pencil, PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
export function Sidebar()
{
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src='https://images.unsplash.com/photo-1649451844808-b81427e7a1f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyJTIwYyUyM3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=50' 
                alt="" 
            />

            <div className={styles.profile}>

                <Avatar className={styles.avatar} src = 'https:/github.com/diegomha.png' />

                <strong>Diego Miguel Halcsick</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}